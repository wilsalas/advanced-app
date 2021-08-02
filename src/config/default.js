const CONFIG = {
  SECRET_TOKEN: process.env.SECRET_TOKEN,
  EXPIRATION_TOKEN: { expiresIn: "24hr" },
};

module.exports = CONFIG;
