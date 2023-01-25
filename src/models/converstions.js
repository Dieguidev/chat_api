const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return converstions.init(sequelize, DataTypes);
}

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
      allowNull: false
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
