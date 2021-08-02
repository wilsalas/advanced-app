"use strict";
const { MODELS } = require("../../../../config/constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      MODELS.UserType,
      [
        {
          name: "Administrador",
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Tester",
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Persona natural",
          createdAt: "2021-07-27 00:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(MODELS.UserType, null, {});
  },
};
