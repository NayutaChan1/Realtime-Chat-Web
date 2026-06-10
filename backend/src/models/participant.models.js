const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Participant = sequelize.define('Participant', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    conversation_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    last_read_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'participants',
    timestamps: true 
});

module.exports = Participant;