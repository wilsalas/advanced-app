"use strict";
const { Model } = require("sequelize");
const { MODELS } = require("../../../../config/constants");
module.exports = (sequelize, DataTypes) => {
  class Credential extends Model {
    static associate(models) {
      this.belongsTo(models[MODELS.UserType], { foreignKey: "userTypeId" });
      this.hasOne(models[MODELS.User], {
        foreignKey: "credentialId",
        as: "credentialUser",
      });
      this.hasOne(models[MODELS.Administrator], {
        foreignKey: "credentialId",
        as: "credentialAdmin",
      });
    }
  }
  Credential.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userTypeId: {
        allowNull: false,
        references: {
          model: MODELS.userTypes,
          key: "id",
        },
        type: DataTypes.BIGINT,
      },
      active: {
        allowNull: false,
        defaultValue: true,
        type: DataTypes.BOOLEAN,
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
      modelName: MODELS.Credential,
    }
  );
  return Credential;
};
