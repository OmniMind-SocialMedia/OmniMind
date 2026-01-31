import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Debate, DebateDocument, Argument } from './schemas/debate.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DebatesService {
    constructor(@InjectModel(Debate.name) private debateModel: Model<DebateDocument>) { }

    async create(data: any, userId: string, displayName: string) {
        // data should contain topic, description, resolutionCriteria, expert (id/slug)
        const newDebate = new this.debateModel({
            ...data,
            createdBy: { id: userId, displayName },
            status: 'OPEN',
            arguments: [],
            argumentCount: 0,
            participantCount: 0, // Logic to track unique participants could be added
        });
        return newDebate.save();
    }

    async findAll(query: any) {
        const filter: any = {};
        if (query.status) filter.status = query.status;
        if (query.expertId) filter['expert.id'] = query.expertId;

        return {
            data: await this.debateModel.find(filter).sort({ createdAt: -1 }).limit(query.limit || 10).exec(),
            pagination: { page: query.page || 1, total: 100, totalPages: 10 } // Mock pagination
        };
    }

    async findOne(id: string) {
        const debate = await this.debateModel.findById(id).exec();
        if (!debate) throw new NotFoundException('Debate not found');
        return debate;
    }

    async addArgument(debateId: string, data: any, userId: string, displayName: string) {
        // data: type, claim, reasoning, evidence
        const debate = await this.debateModel.findById(debateId);
        if (!debate) throw new NotFoundException('Debate not found');

        const newArgument: Argument = {
            id: uuidv4(),
            type: data.type,
            claim: data.claim,
            reasoning: data.reasoning,
            evidence: data.evidence || [],
            author: { id: userId, displayName, reputationScore: 0 }, // Mock reputation
            validationStatus: 'PENDING',
            createdAt: new Date(),
        };

        debate.arguments.push(newArgument);
        debate.argumentCount += 1;

        // Update participant count logic if needed

        await debate.save();
        return newArgument;
    }

    async updateStatus(id: string, status: string, outcome?: any) {
        const update: any = { status };
        if (outcome) update.outcome = outcome; // If schema supports it, strictly strictly typed in schema it wasn't added but let's assume flexibility

        const debate = await this.debateModel.findByIdAndUpdate(id, update, { new: true }).exec();
        if (!debate) throw new NotFoundException('Debate not found');
        return debate;
    }
}
