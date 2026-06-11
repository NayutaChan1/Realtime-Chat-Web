import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';
import sequelize from '../config/database';

class Message extends Model<
    InferAttributes<Message>,
    InferCreationAttributes<Message>
> {
    declare id: CreationOptional<number>;
    declare conversation_id: number;
    declare sender_id: number;
    declare content: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        conversation_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: 'messages',
        timestamps: true,
    }
);

export default Message;
