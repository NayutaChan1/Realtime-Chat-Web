const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('realtime_chat', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', 
    logging: false,   
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL Database connection established successfully!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

testConnection();

module.exports = sequelize;