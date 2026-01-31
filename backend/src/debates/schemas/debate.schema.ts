import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type DebateDocument = Debate & Document;

@Schema()
export class Argument {
    @Prop()
    id: string; // Manually managing IDs for subdocuments if needed, or rely on _id

    @Prop({ required: true })
    type: string; // 'CLAIM' | 'SUPPORT' | 'COUNTER' | 'QUESTION' | 'SYNTHESIS'

    @Prop({ required: true })
    claim: string;

    @Prop()
    reasoning: string;

    @Prop({ type: Object })
    author: { id: string; displayName: string; reputationScore: number };

    @Prop({ type: [Object] })
    evidence: any[];

    @Prop({ default: 'PENDING' })
    validationStatus: string;

    @Prop({ default: Date.now })
    createdAt: Date;

    // Simple nested structure or flat reference could be used. 
    // For document model, nesting replies recursively can be tricky with types but possible.
    // We'll skip recursive replies in schema definition strictness for now.
}

@Schema({ timestamps: true })
export class Debate {
    @Prop({ required: true })
    topic: string;

    @Prop()
    description: string;

    @Prop({ default: 'OPEN' })
    status: string; // 'OPEN' | 'VOTING' | 'RESOLVED' | 'STALE' | 'CLOSED'

    @Prop({ required: true })
    resolutionCriteria: string;

    @Prop({ type: Object })
    expert: { id: string; slug: string; currentVersion: any };

    @Prop({ type: Object })
    createdBy: { id: string; displayName: string };

    @Prop({ type: [Object], default: [] })
    arguments: Argument[];

    // Counters
    @Prop({ default: 0 })
    argumentCount: number;

    @Prop({ default: 0 })
    participantCount: number;
}

export const DebateSchema = SchemaFactory.createForClass(Debate);
