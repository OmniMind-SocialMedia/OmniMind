import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ExpertsModule } from './experts/experts.module';
import { DebatesModule } from './debates/debates.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI') || 'mongodb://localhost:27017/omnimind', // Fallback for dev
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    ExpertsModule,
    DebatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
