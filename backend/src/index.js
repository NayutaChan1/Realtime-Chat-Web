const express = require('express');
const cors = require('cors');

const models = require('./models/index');
const sequelize = require('./config/database');

const app = express();
const port = 3000

// Middleware
app.use(cors());
app.use(express.json());

sequelize.sync({alter: true}).then(() => {
    console.log("All Database Synced Successfully");

    app.listen(port, () => {
        console.log(`App is listen in port ${port}`);
    });
}).catch((error) => {
    console.error('Unable to sync database:', error);
})