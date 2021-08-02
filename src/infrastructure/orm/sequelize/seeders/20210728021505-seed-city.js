"use strict";
const { MODELS } = require("../../../../config/constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      MODELS.City,
      [
        {
          name: "Barranquilla",
          stateId: 1,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Soledad 2000",
          stateId: 1,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Bucaramanga",
          stateId: 2,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "San Gil",
          stateId: 2,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Caracas",
          stateId: 3,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Santa Lucía",
          stateId: 3,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Almirante Padilla",
          stateId: 4,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Rosario de Perijá",
          stateId: 4,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Los Ángeles",
          stateId: 5,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "San José",
          stateId: 5,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Miami",
          stateId: 6,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          name: "Orlando",
          stateId: 6,
          createdAt: "2021-07-27 00:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(MODELS.City, null, {});
  },
};
