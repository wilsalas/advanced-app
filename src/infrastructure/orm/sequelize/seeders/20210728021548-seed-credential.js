"use strict";
const { MODELS } = require("../../../../config/constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      MODELS.Credential,
      [
        {
          email: "admin@gmail.com",
          /* adminWs123 */
          password: "258f810e7db8c1fc923d497bc5a3e5c0:fb5cb56dfda2d80f9ab5bff9cf0ab0089102705b4973a11bc2efd1fd2371213cd267573b99024a274050134176012cc0fd104f481414e724a17d31332b0b755c",
          userTypeId: 1,
          active: true,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          email: "tester@gmail.com",
          /* testerWs123 */
          password: "fe03145a33428583eb431266dfd199d6:5d7be9dedec7db51b513875bd7e64122b53e1663b334a6afaab6e9201d025f70fc93dd6753092483aee97a4a41870c4c0d81de7e0309e7597672f284b107eba4",
          userTypeId: 2,
          active: true,
          createdAt: "2021-07-27 00:00:00",
        },
        {
          email: "user@gmail.com",
          /* userWs123 */
          password: "f1064404673f8bf4818664ee56aa5115:d065b7732057d8a522220c4b1261b0f8513f645b37bbe910055375d33c2aecdd6d5e44ef80d23c4a44425ef48af308c166a76c61463c1adcbdedb49b26d16a41",
          userTypeId: 3,
          active: true,
          createdAt: "2021-07-27 00:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(MODELS.Credential, null, {});
  },
};
