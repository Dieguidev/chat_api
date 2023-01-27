const ConversationServices = require("../services/conversations.services");

const createConversation = async (req, res) => {
  try {
    const { title, image_url, created_by } = req.body
    const newConversation = { title, image_url, created_by }
    const result = await ConversationServices.createConversation(newConversation);
    const conversation_id = result.id;
    if (result) {
      const { user_id } = req.body;
      const newParticipants = { user_id, conversation_id };
      await ConversationServices.createParticipants(newParticipants);
    }

    res.status(201).json({message: 'conversation created'})

  } catch (error) {
    res.status(400).json(error.message);
  }

}



module.exports = { createConversation }