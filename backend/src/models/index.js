const User = require('./user.models');
const Conversation = require('./conversation.models');
const Participant = require('./participant.models');
const Message = require('./message.models');

User.hasMany(Message, {foreignKey: 'sender_id'});
Message.belongsTo(User, {foreignKey: 'sender_id'});

Conversation.hasMany(Message, {foreignKey: 'conversation_id'});
Message.belongsTo(Conversation, {foreignKey: 'conversation_id'});

User.belongsToMany(Conversation, { 
    through: Participant, 
    foreignKey: 'user_id' 
});
Conversation.belongsToMany(User, { 
    through: Participant, 
    foreignKey: 'conversation_id' 
});

module.exports = {
    User,
    Conversation,
    Participant,
    Message
};