import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';
import sequelize from '../config/database';

class Participant extends Model<
    InferAttributes<Participant>,
    InferCreationAttributes<Participant>
> {
    declare id: CreationOptional<number>;
    declare user_id: number;
    declare conversation_id: number;
    declare last_read_at: Date | null;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Participant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        conversation_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        last_read_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: 'participants',
        timestamps: true,
    }
);

export default Participant;
