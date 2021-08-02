"use strict";
const { MODELS } = require("../../../../config/constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      MODELS.Country,
      [
        {
          name: "Colombia",
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Venezuela",
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Estados Unidos de América",
          createdAt: "2021-07-27 00:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(MODELS.Country, null, {});
  },
};
