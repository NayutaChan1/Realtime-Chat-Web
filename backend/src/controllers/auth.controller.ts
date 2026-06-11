import { Request, Response } from 'express';
import * as service from '../services/auth.services';

const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ message: 'username and password are required' });
            return;
        }

        const newUser = await service.registerUser(username, password);
        res.status(201).json(newUser);
    } catch (error) {
        const message =
            error instanceof Error ? error.message : 'Internal server error';
        res.status(500).json({ message });
    }
};

const findUser = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;
        if(!username || !password){
            res.status(400).json({ message: "username and password are required" });
            return;
        }

        const user = await service.getUser(username, password);
        res.status(200).json(user);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Internal Server Error';
        res.status(500).json({ message });
    }
}

export { register, findUser };
