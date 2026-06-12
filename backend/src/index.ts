import express from 'express';
import cors from 'cors';

import './models/index';
import sequelize from './config/database';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

sequelize
    .sync({ alter: true })
    .then(() => {
        console.log('All Database Synced Successfully');

        app.listen(port, () => {
            console.log(`App is listen in port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Unable to sync database:', error);
    });



