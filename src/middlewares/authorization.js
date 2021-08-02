const { verify } = require("jsonwebtoken");
const { SECRET_TOKEN } = require("../config/default");
const { hexistsAndHget } = require("../infrastructure/redis/redis");

const verifyToken = async (token, ignoreExpiration = false) => {
  return new Promise(async (resolve, reject) => {
    verify(token, SECRET_TOKEN, { ignoreExpiration }, function (err, decoded) {
      if (err) return reject(err);
      const credentialId = String(decoded.id);
      return resolve(credentialId);
    });
  });
};

const verifyBearerToken = (authHeader) => {
  return new Promise((resolve, reject) => {
    if (!authHeader || authHeader == "" || typeof authHeader == "undefined")
      reject("Token sending incorrectly");
    const splitToken = authHeader.split(" ");
    const bearer = splitToken[0];
    const token = splitToken[1];
    if (bearer !== "Bearer" || !bearer) reject("Bearer token format incorrect");
    resolve(token);
  });
};

const getCredentialPayload = async (req, ignoreExpiration = false) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await verifyBearerToken(req.headers["authorization"]);
      const idFromToken = await verifyToken(token, ignoreExpiration);
      const payload = await hexistsAndHget("sessions", idFromToken);
      resolve(payload);
    } catch (error) {
      reject(error);
    }
  });
};

const authorizeToken = async (req, res, next) => {
  try {
    req.user = await getCredentialPayload(req);
    return next();
  } catch (error) {
    return res.status(401).send("Unauthorized user " + error );
  }
};

const authUserType = (userTypes = [], req, res, next) => {
  const loggedUserType = parseInt(req.user.userTypeId);
  if (!userTypes.includes(loggedUserType)) {
    return res.status(403).send("API unauthorized for this type of user");
  }
  return next();
};

/**
 * Receives a list of allowed user type separated by commas
 * @param arguments example: (ADMIN , TESTER)
 * @returns Returns token authorization and allowed user types
 */
const auth = (...args) => [authorizeToken, authUserType.bind(this, args)];

module.exports = { auth };
