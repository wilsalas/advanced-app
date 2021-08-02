"use strict";
const { Model } = require("sequelize");
const { MODELS } = require("../../../../config/constants");
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static associate(models) {
      this.belongsTo(models[MODELS.Country], { foreignKey: "countryId" });
    }
  }
  State.init(
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
      countryId: {
        allowNull: false,
        references: {
          model: MODELS.Country,
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
      modelName: MODELS.State,
    }
  );
  return State;
};
