"use strict";
const { Model } = require("sequelize");
const { MODELS } = require("../../../../config/constants");
module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    static associate(models) {}
  }
  UserType.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: MODELS.UserType,
    }
  );
  return UserType;
};
