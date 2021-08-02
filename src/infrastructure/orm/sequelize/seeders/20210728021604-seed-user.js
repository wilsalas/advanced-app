"use strict";
const { MODELS } = require("../../../../config/constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      MODELS.User,
      [
        {
          firstName: "Wil",
          secondName: "",
          lastName: "Salas",
          secondLastName: "SS",
          cellphone: 3014808945,
          age: 27,
          image: null,
          birthday: Sequelize.fn("now"),
          address: "Calle falsa 123",
          cityId: 1,
          credentialId: 3,
          createdAt: "2021-07-27 00:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(MODELS.User, null, {});
  },
};
