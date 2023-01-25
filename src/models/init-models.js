const DataTypes = require("sequelize").DataTypes;
const _converstions = require("./converstions");
const _messages = require("./messages");
const _participants = require("./participants");
const _users = require("./users");

function initModels(sequelize) {
  const converstions = _converstions(sequelize, DataTypes);
  const messages = _messages(sequelize, DataTypes);
  const participants = _participants(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  messages.belongsTo(converstions, { as: "conversation", foreignKey: "conversation_id"});
  converstions.hasMany(messages, { as: "messages", foreignKey: "conversation_id"});
  participants.belongsTo(converstions, { as: "conversation", foreignKey: "conversation_id"});
  converstions.hasMany(participants, { as: "participants", foreignKey: "conversation_id"});
  converstions.belongsTo(users, { as: "created_by_user", foreignKey: "created_by"});
  users.hasMany(converstions, { as: "converstions", foreignKey: "created_by"});
  messages.belongsTo(users, { as: "sender", foreignKey: "sender_id"});
  users.hasMany(messages, { as: "messages", foreignKey: "sender_id"});
  participants.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(participants, { as: "participants", foreignKey: "user_id"});

  return {
    converstions,
    messages,
    participants,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
