
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'game_results', timestamps: true, createdAt: true, updatedAt: false })
export class GameResult extends Model<GameResult> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @Column({ type: DataType.STRING, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({
        type: DataType.ENUM('beginner', 'intermediate', 'expert'),
        allowNull: false,
    })
    difficulty: 'beginner' | 'intermediate' | 'expert';

    @Column({ type: DataType.INTEGER, allowNull: false })
    time: number;
}
