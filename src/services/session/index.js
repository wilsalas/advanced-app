const redis = require("../../infrastructure/redis/redis");
const { sign, verify } = require("jsonwebtoken");
const { SECRET_TOKEN, EXPIRATION_TOKEN } = require("../../config/default");

const generateToken = (id) => {
  return new Promise((resolve, reject) => {
    try {
      const token = sign({ id }, SECRET_TOKEN, EXPIRATION_TOKEN);
      resolve(token);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

const saveRedisSession = ({ dataValues, sessionId }) => {
  return new Promise((resolve, reject) => {
    try {
      const { id } = dataValues;
      dataValues["sessionId"] = sessionId;
      dataValues = JSON.stringify(dataValues);
      const save = redis.hset("sessions", id.toString(), dataValues);
      resolve(save);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

const logout = async ({ sessionId, sessionDb, credentialId }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const where = { id: sessionId };
      const session = await sessionDb.findOne({ where });
      if (!session) reject("Session was not found");
      await redis.hdel("sessions", credentialId);
      await session.destroy({ where });
      resolve("Successful session close");
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  generateToken,
  saveRedisSession,
  logout,
};
