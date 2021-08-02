const db = require("../../infrastructure/orm/sequelize/models");
const {
  verifyPassword,
  passwordHash,
} = require("../../services/crypto/crypto");
const {
  generateToken,
  saveRedisSession,
  logout,
} = require("../../services/session");

const loginUser = async ({ email, password, userType }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let credential = await db.Credential.findOne({
        include: [
          {
            model: db.User,
            as: "credentialUser",
          },
          {
            model: db.Administrator,
            as: "credentialAdmin",
          },
        ],
        where: { email },
      });
      credential = JSON.parse(JSON.stringify(credential, null, 4));
      if (!credential || !(await verifyPassword(password, credential.password)))
        reject("Credential Incorrect");
      if (!credential.active) reject("User Inactive");
      const userData = {
        [userType.ADMIN]: credential.credentialAdmin,
        [userType.TESTER]: credential.credentialAdmin,
        [userType.PERSON]: credential.credentialUser,
      };
      const result = Object.assign({
        email: credential.email,
        userTypeId: credential.userTypeId,
        ...userData[credential.userTypeId],
      });
      const token = await generateToken(result.id);
      const session = await db.Session.create({
        credentialId: result.id,
      });
      await saveRedisSession({
        dataValues: result,
        sessionId: session.get("id"),
      });
      resolve({
        result,
        token,
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

const createUser = ({
  email,
  password,
  userTypeId = 3,
  active,
  firstName,
  secondName,
  lastName,
  secondLastName,
  cellphone,
  age,
  image = null,
  birthday,
  address,
  cityId,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await db.sequelize.transaction(async (transaction) => {
        const pwHash = await passwordHash(password);
        const newUser = await db.Credential.create(
          {
            email,
            password: pwHash,
            userTypeId,
            active,
            credentialUser: {
              firstName,
              secondName,
              lastName,
              secondLastName,
              cellphone,
              age,
              image,
              birthday,
              address,
              cityId,
            },
          },
          {
            include: {
              model: db.User,
              as: "credentialUser",
            },
          },
          { transaction }
        );
        return newUser;
      });
      resolve(result);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

const logoutUser = async ({ sessionId, credentialId }) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(await logout({ sessionId, sessionDb: db.Session, credentialId }));
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

module.exports = {
  loginUser,
  logoutUser,
  createUser,
};
