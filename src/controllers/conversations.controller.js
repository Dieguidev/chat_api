const ConversationServices = require("../services/conversations.services");
const ParticipantServices = require("../services/participants.services");

const createConversation = async (req, res) => {
  try {
    const { title, user_id, created_by } = req.body
    if (!title || !created_by || !user_id) {
      return res.status(400).json({ message: 'Missing require fields' })
    }
    // const newConversation = { title, image_url, created_by }
    const conversation = await ConversationServices.createConversation(title, created_by);
    console.log(conversation.id);
    const conversation_id = conversation.id;
    if (conversation) {
      await ParticipantServices.createParticipants(conversation_id, created_by);
      await ParticipantServices.createParticipants(conversation_id, user_id);
    }


    res.status(201).json({ message: 'conversation created' })

  } catch (error) {
    res.status(400).json(error.message);
  }

}



module.exports = { createConversation }