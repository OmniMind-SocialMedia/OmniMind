import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpertsController } from './experts.controller';
import { ExpertsService } from './experts.service';
import { Expert, ExpertSchema } from './schemas/expert.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Expert.name, schema: ExpertSchema }]),
    ],
    controllers: [ExpertsController],
    providers: [ExpertsService],
})
export class ExpertsModule { }
