import { Request, Response } from "express";
import { getProfile } from "../services/user.services";

const profile = async (req: Request, res: Response) => {
    const { id, username, status } = req.body;
    if(!id || !username || !status ){
        res.status(400).json({ message: "Something Wrong"});
    }

    try {
        const user = await getProfile(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
    
}