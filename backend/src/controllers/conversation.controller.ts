import { Request, Response } from "express";
import { createConversation } from "../services/conversation.services";



const makeConversation = async (req: Request, res: Response) => {
    try{
        const user = (req as any).user;
        const { target_id } = req.body;

        const createConv = createConversation(user.id, target_id);
        res.status(200).json({createConv});
    } catch(error) {
        const err = error instanceof Error ? error.message : 'Internal Server Error';
        res.status(500).json({err});
    }
}


export { makeConversation };