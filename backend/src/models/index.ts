import User from './user.models';
import Conversation from './conversation.models';
import Participant from './participant.models';
import Message from './message.models';

User.hasMany(Message, { foreignKey: 'sender_id' });
Message.belongsTo(User, { foreignKey: 'sender_id' });

Conversation.hasMany(Message, { foreignKey: 'conversation_id' });
Message.belongsTo(Conversation, { foreignKey: 'conversation_id' });

User.belongsToMany(Conversation, {
    through: Participant,
    foreignKey: 'user_id',
});
Conversation.belongsToMany(User, {
    through: Participant,
    foreignKey: 'conversation_id',
});

export { User, Conversation, Participant, Message };
