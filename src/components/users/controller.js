const model = require("./model");

const loginUser = async (req, res) => {
  try {
    const credential = { ...req.body };
    const result = await model.loginUser(credential);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createUser = async (req, res) => {
  try {
    const user = { ...req.body };
    const newUser = await model.createUser(user);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

const logoutUser = async (req, res) => {
  try {
    const user = { sessionId: req.user.sessionId, credentialId: req.user.id };
    const newUser = await model.logoutUser(user);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  loginUser,
  logoutUser,
  createUser,
};
