import { Controller, Get, Post, Body } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}

    @Post('result')
    saveResult(
        @Body() body: { userId: number; email: string; difficulty: 'beginner' | 'intermediate' | 'expert'; time: number },
    ) {
        return this.gamesService.saveResult(body);
    }

    @Get('results')
    getAllResults() {
        return this.gamesService.getAllResults();
    }
}