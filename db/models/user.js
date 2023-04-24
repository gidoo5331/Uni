"use strict";
const { models } = require("@next-auth/sequelize-adapter");
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../index");

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    User.hasOne(models.Account, {
      foreignKey: {
        type: Types.UUID,
        allowNull: false,
        unique: true,
      },
    });

    User.hasOne(models.Session, {
      foreignKey: "user_id",
    });

  }
}
User.init(
  {
    ...models.User,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    email_verified: DataTypes.DATE,
    emailVerified: DataTypes.DATE,
  },
  {
    sequelize: sequelize,
    modelName: "User",
    tableName: "users",
  }
);

module.exports = User;