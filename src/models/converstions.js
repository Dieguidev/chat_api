const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return converstions.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     newConversation:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: conversations
 *         created_by:
 *           type: int
 *           example: 1
 *         user_id:
 *           type: int
 *           example: 2
 */

class converstions extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.ENUM("single","group"),
      allowNull: true,
      defaultValue: "single"
    }
  }, {
    sequelize,
    tableName: 'converstions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "converstions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
