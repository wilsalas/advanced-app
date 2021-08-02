"use strict";
const { Model } = require("sequelize");
const { MODELS } = require("../../../../config/constants");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      this.belongsTo(models[MODELS.State], { foreignKey: "stateId" });
    }
  }
  City.init(
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
      stateId: {
        allowNull: false,
        references: {
          model: MODELS.State,
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
      modelName: MODELS.City,
    }
  );
  return City;
};
