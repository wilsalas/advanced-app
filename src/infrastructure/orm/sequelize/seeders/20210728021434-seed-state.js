"use strict";
const { MODELS } = require("../../../../config/constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      MODELS.State,
      [
        {
          name: "Atlántico",
          countryId: 1,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Santander",
          countryId: 1,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Miranda",
          countryId: 2,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Zulia",
          countryId: 2,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "California",
          countryId: 3,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Florida",
          countryId: 3,
          createdAt: "2021-07-27 00:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(MODELS.State, null, {});
  },
};
