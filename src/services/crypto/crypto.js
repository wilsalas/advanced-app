const crypto = require("crypto");
const algorithm = "aes-256-ctr";
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
const iv = crypto.randomBytes(16);
const { promisify } = require("util");

const passwordHash = async (password) => {
  if (!password) return;
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString("hex");
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ":" + derivedKey.toString("hex"));
    });
  });
};

const verifyPassword = async (password, hash) => {
  if (!hash) return;
  const [salt, key] = hash.split(":");
  const keyBuffer = Buffer.from(key, "hex");
  const scrypt = promisify(crypto.scrypt);
  const derivedKey = await scrypt(password, salt, 64);
  return crypto.timingSafeEqual(keyBuffer, derivedKey);
};

const encrypt = (data) => {
  if (!data) return;
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex"),
  };
};

const decrypt = (hash) => {
  if (!hash) return;
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(hash.iv, "hex")
  );
  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, "hex")),
    decipher.final(),
  ]);
  return decrpyted.toString();
};

module.exports = {
  encrypt,
  decrypt,
  passwordHash,
  verifyPassword,
};
