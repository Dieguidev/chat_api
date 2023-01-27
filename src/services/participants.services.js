const models = require('../models/index');

class ParticipantServices {

  static async createParticipants(conversationId, userId) {
    try {
      const result = await models.participants.create({
        conversation_id: conversationId,
        user_id: userId,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

};

module.exports = ParticipantServices;