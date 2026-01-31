import { Controller, Get, Post, Body, Param, Patch, Query, UseGuards, Request } from '@nestjs/common';
import { DebatesService } from './debates.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('debates')
export class DebatesController {
    constructor(private readonly debatesService: DebatesService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Body() createDebateDto: any, @Request() req) {
        return this.debatesService.create(createDebateDto, req.user._id, req.user.displayName || req.user.email);
    }

    @Get()
    findAll(@Query() query) {
        return this.debatesService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.debatesService.findOne(id);
    }

    @Post(':id/arguments')
    @UseGuards(AuthGuard('jwt'))
    addArgument(@Param('id') id: string, @Body() createArgumentDto: any, @Request() req) {
        return this.debatesService.addArgument(id, createArgumentDto, req.user._id, req.user.displayName || req.user.email);
    }

    @Patch(':id/status')
    @UseGuards(AuthGuard('jwt'))
    updateStatus(@Param('id') id: string, @Body() body: { status: string, outcome?: any }) {
        return this.debatesService.updateStatus(id, body.status, body.outcome);
    }
}
