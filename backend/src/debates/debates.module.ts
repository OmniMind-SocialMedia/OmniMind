import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DebatesController } from './debates.controller';
import { DebatesService } from './debates.service';
import { Debate, DebateSchema } from './schemas/debate.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Debate.name, schema: DebateSchema }]),
    ],
    controllers: [DebatesController],
    providers: [DebatesService],
})
export class DebatesModule { }
