const dao = require("./dao");
const { USER_TYPE } = require("../../config/constants");

const loginUser = async ({ email, password }) => {
  return dao.loginUser({
    email,
    password,
    userType: USER_TYPE,
  });
};

const createUser = async (user) => dao.createUser(user);

const logoutUser = async (user) => dao.logoutUser(user);

module.exports = {
  loginUser,
  logoutUser,
  createUser,
};
