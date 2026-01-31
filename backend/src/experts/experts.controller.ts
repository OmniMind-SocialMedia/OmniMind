import { Controller, Get, Post, Body, Param, Patch, Query, UseGuards, Request } from '@nestjs/common';
import { ExpertsService } from './experts.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('experts')
export class ExpertsController {
    constructor(private readonly expertsService: ExpertsService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Body() createExpertDto: any, @Request() req) {
        // Assuming req.user is populated by JwtStrategy
        return this.expertsService.create(createExpertDto, req.user._id, req.user.displayName || req.user.email);
    }

    @Get()
    findAll(@Query() query) {
        return this.expertsService.findAll(query);
    }

    @Get('slug/:slug')
    findBySlug(@Param('slug') slug: string) {
        return this.expertsService.findBySlug(slug);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.expertsService.findOne(id);
    }

    @Patch(':id/status')
    @UseGuards(AuthGuard('jwt'))
    updateStatus(@Param('id') id: string, @Body('status') status: string) {
        return this.expertsService.updateStatus(id, status);
    }
}
