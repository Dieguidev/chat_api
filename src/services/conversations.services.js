const models = require('../models/index')


class ConversationServices {
  static async createConversation(newConversation) {
    try {
      const result = await models.converstions.create(newConversation);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createParticipants(newParticipants) {
    try {
      const result = await models.participants.create(newParticipants);
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = ConversationServices;





