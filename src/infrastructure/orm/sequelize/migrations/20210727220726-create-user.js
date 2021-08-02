"use strict";
const { MODELS } = require("../../../../config/constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(MODELS.User, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      secondName: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      secondLastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cellphone: {
        allowNull: true,
        type: Sequelize.BIGINT,
      },
      age: {
        allowNull: true,
        type: Sequelize.BIGINT,
      },
      image: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      birthday: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      address: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      cityId: {
        allowNull: false,
        references: {
          model: MODELS.City,
          key: "id",
        },
        type: Sequelize.BIGINT,
      },
      credentialId: {
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: MODELS.Credential,
          key: "id",
        },
        type: Sequelize.BIGINT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(MODELS.User);
  },
};
