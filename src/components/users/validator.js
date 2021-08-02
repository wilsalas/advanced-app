const { body } = require("express-validator");
const { validate } = require("../../middlewares/validatorError");

const checkLogin = [
  body("email")
    .isString()
    .withMessage("El campo debe ser de tipo texto")
    .exists()
    .withMessage("El campo no fue enviado y es obligatorio")
    .not()
    .withMessage("Campo vacío"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("El campo debe tener más de 6 caracteres")
    .exists()
    .withMessage("El campo no fue enviado y es obligatorio")
    .not()
    .withMessage("Campo vacío"),
];

module.exports = {
  functions: {},
  properties: {
    login: validate(checkLogin),
  },
};
