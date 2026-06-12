import { Conversation, Participant } from "../models"


const createConversation = async (user_id: number, target_id: number) => {
    const conversation = await Conversation.create({ is_group: false, name: null});

    const participant = Participant.bulkCreate([
        { user_id: user_id, conversation_id: conversation.id },
        { user_id: target_id, conversation_id: conversation.id }
    ]);

    return conversation;
}



export { createConversation };