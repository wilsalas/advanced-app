"use strict";
const { Model } = require("sequelize");
const { MODELS } = require("../../../../config/constants");
module.exports = (sequelize, DataTypes) => {
  class Administrator extends Model {
    static associate(models) {
      this.belongsTo(models[MODELS.City], { foreignKey: "cityId" });
      this.belongsTo(models[MODELS.Credential], {
        foreignKey: "credentialId",
      });
    }
  }
  Administrator.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      cityId: {
        allowNull: false,
        references: {
          model: MODELS.City,
          key: "id",
        },
        type: DataTypes.BIGINT,
      },
      credentialId: {
        allowNull: false,
        references: {
          model: MODELS.Credential,
          key: "id",
        },
        type: DataTypes.BIGINT,
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
      modelName: MODELS.Administrator,
    }
  );
  return Administrator;
};
