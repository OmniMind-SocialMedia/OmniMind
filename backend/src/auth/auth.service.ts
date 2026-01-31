import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService,
    ) { }

    async register(registrationData: RegisterDto) {
        const { email, password, displayName } = registrationData;

        const existingUser = await this.userModel.findOne({ email });
        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUser = await this.userModel.create({
            email,
            passwordHash: hashedPassword,
            displayName,
        });

        const token = this.generateToken(createdUser);
        return {
            user: this.sanitizeUser(createdUser),
            token,
            expiresIn: '1d', // simplified
        };
    }

    async login(loginData: LoginDto) {
        const { email, password } = loginData;
        const user = await this.userModel.findOne({ email });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordMatching = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordMatching) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const token = this.generateToken(user);
        return {
            user: this.sanitizeUser(user),
            token,
            expiresIn: '1d',
        };
    }

    private generateToken(user: UserDocument) {
        const payload = { sub: user._id, email: user.email, roles: user.roles };
        return this.jwtService.sign(payload);
    }

    private sanitizeUser(user: UserDocument) {
        const userObj = user.toObject();
        delete userObj.passwordHash;
        return userObj;
    }
}
