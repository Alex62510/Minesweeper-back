import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import {GameResult} from "./games-result.model";


@Module({
    imports: [SequelizeModule.forFeature([GameResult])],
    controllers: [GamesController],
    providers: [GamesService],
})
export class GamesModule {}