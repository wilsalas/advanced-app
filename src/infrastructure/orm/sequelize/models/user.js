"use strict";
const { Model } = require("sequelize");
const { MODELS } = require("../../../../config/constants");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models[MODELS.City], { foreignKey: "cityId" });
      this.belongsTo(models[MODELS.Credential], {
        foreignKey: "credentialId",
      });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      secondName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      secondLastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cellphone: {
        allowNull: true,
        type: DataTypes.BIGINT,
      },
      age: {
        allowNull: true,
        type: DataTypes.BIGINT,
      },
      image: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      birthday: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      address: {
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
        onDelete: "CASCADE",
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
      modelName: MODELS.User,
    }
  );
  return User;
};
