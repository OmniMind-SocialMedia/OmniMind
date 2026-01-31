import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ExpertDocument = Expert & Document;

@Schema({ timestamps: true })
export class Expert {
    @Prop({ required: true, unique: true })
    slug: string;

    @Prop({ required: true, default: 'DRAFT' })
    status: string; // 'DRAFT' | 'REVIEW' | 'ACTIVE' | 'DEPRECATED' | 'RETIRED'

    @Prop({ type: Object })
    currentVersion: any; // Storing as mixed object for flexibility for now, can refine later

    @Prop({ type: [Object], default: [] })
    versions: any[];

    @Prop({ type: MongooseSchema.Types.Mixed })
    createdBy: { id: string; displayName: string };

    // Adding name/title which seemed implied or part of scope/currentVersion in frontend types but useful at top level
    @Prop()
    name: string;
}

export const ExpertSchema = SchemaFactory.createForClass(Expert);
