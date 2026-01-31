import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expert, ExpertDocument } from './schemas/expert.schema';

@Injectable()
export class ExpertsService {
    constructor(@InjectModel(Expert.name) private expertModel: Model<ExpertDocument>) { }

    async create(data: any, userId: string, displayName: string) {
        // Generate slug from name if not provided
        const slug = data.slug || data.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

        // Construct initial version
        const version = {
            number: 1,
            scope: data.scope,
            permissions: data.permissions,
            createdAt: new Date(),
            createdBy: { id: userId, displayName },
            changeReason: data.changeReason || 'Initial creation',
        };

        const newExpert = new this.expertModel({
            ...data,
            slug,
            currentVersion: version,
            versions: [version],
            createdBy: { id: userId, displayName },
            status: 'DRAFT',
        });
        return newExpert.save();
    }

    async findAll(query: any) {
        const filter: any = {};
        if (query.status) filter.status = query.status;
        // Add implementation for search/pagination
        return {
            data: await this.expertModel.find(filter).exec(),
            pagination: { page: 1, total: 10, totalPages: 1 } // Mock pagination for now
        };
    }

    async findOne(id: string) {
        const expert = await this.expertModel.findById(id).exec();
        if (!expert) throw new NotFoundException('Expert not found');
        return expert;
    }

    async findBySlug(slug: string) {
        const expert = await this.expertModel.findOne({ slug }).exec();
        if (!expert) throw new NotFoundException('Expert not found');
        return expert;
    }

    async updateStatus(id: string, status: string) {
        const expert = await this.expertModel.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        ).exec();
        if (!expert) throw new NotFoundException('Expert not found');
        return expert;
    }
}
