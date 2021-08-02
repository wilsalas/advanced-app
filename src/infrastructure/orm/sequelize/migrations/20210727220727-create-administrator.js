"use strict";
const { MODELS } = require("../../../../config/constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(MODELS.Administrator, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      image: {
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
    await queryInterface.dropTable(MODELS.Administrator);
  },
};
