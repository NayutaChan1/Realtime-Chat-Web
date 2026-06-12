import { Conversation, Message, Participant, User } from "../models"


const createConversation = async (user_id: number, target_id: number) => {
    const conversation = await Conversation.create({ is_group: false, name: null});

    const participant = Participant.bulkCreate([
        { user_id: user_id, conversation_id: conversation.id },
        { user_id: target_id, conversation_id: conversation.id }
    ]);

    return conversation;
}

const getUserConversation = async (user_id: number) => {
    const conversation = await Conversation.findAll({ 
        include: [
            {
                model: User,
                where: { id: user_id },
                attributes: []
            }
        ]
    });

    return conversation;
}

const getMessages = async (conversation_id: number) => {
    const messages = await Message.findAll({
        where: {conversation_id: conversation_id},
        include: [{
            model: User,
            attributes: ['id', 'username'],
            order: [['createdAt', 'ASC']]
        }]
    });

    return messages
}

export { createConversation, getUserConversation, getMessages };