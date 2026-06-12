import { Request, Response } from "express";
import { getProfile } from "../services/user.services";

const profile = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = (req as any).user.id;

        const user = await getProfile(id);
        res.status(200).json(user);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Internal Server Error';
        res.status(500).json({ message });
    }
}

export { profile };