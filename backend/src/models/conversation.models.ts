import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';
import sequelize from '../config/database';

class Conversation extends Model<
    InferAttributes<Conversation>,
    InferCreationAttributes<Conversation>
> {
    declare id: CreationOptional<number>;
    declare is_group: boolean;
    declare name: string | null;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Conversation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        is_group: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: 'conversation',
        timestamps: true,
    }
);

export default Conversation;
