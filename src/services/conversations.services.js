const models = require('../models/index')


class ConversationServices {
  static async createConversation(title, created_by) {
    try {
      const result = await models.converstions.create({title, created_by});
      return result;
    } catch (error) {
      throw error;
    }
  }


}

module.exports = ConversationServices;





