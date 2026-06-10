const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Conversation = sequelize.define('conversation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    is_group: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'conversation',
    timestamps: true
});

module.exports = Conversation;