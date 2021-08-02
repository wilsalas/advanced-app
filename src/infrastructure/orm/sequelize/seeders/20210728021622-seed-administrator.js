"use strict";
const { MODELS } = require("../../../../config/constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      MODELS.Administrator,
      [
        {
          name: "Admin WS",
          image: null,
          cityId: 3,
          credentialId: 1,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Tester WS",
          image: null,
          cityId: 5,
          credentialId: 2,
          createdAt: "2021-07-27 00:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(MODELS.Administrator, null, {});
  },
};
