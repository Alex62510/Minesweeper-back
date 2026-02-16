import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GameResult } from './games-result.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class GamesService {
    constructor(
        @InjectModel(GameResult)
        private gameResultModel: typeof GameResult,
    ) {}

    async saveResult(data: {
        userId: number;
        email: string;
        difficulty: 'beginner' | 'intermediate' | 'expert';
        time: number;
    }) {
        // Используем CreationAttributes<GameResult>, чтобы TS не ругался
        return this.gameResultModel.create(
            data as CreationAttributes<GameResult>
        );
    }

    async getAllResults() {
        return this.gameResultModel.findAll({
            order: [['time', 'ASC']],
        });
    }
}