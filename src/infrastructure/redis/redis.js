const redis = require("redis");
const redisClient = redis.createClient("redis://redis");

/**
 *
 * @param {*} hash
 * @param {*} key
 * @param {*} value
 * @param {*} cb
 * Sets field in the hash stored at key to value. If key does not exist, a new key holding a hash is created. If field already exists in the hash, it is overwritten.
 */
const hset = (hash, key, value, cb = redis.print) => {
  return new Promise(async (resolve, reject) => {
    try {
      const save = await redisClient.hset(hash, key, value, cb);
      resolve(save);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

/**
 *
 * @param {*} hash
 * @param {*} key
 * @returns the value associated with field in the hash stored at key.
 */
const hget = (hash, key) => {
  return new Promise(async (resolve, reject) => {
    redisClient.hget(hash, key, function (err, obj) {
      if (err) reject(err);
      if (!obj) reject("Data not found");
      resolve(JSON.parse(obj));
    });
  });
};

/**
 *
 * @param {*} hash
 * @param {*} key
 * @returns if field is an existing field in the hash stored at key.
 */
const hexists = (hash, key) => {
  return new Promise((resolve, reject) => {
    redisClient.hexists(hash, key, function (err, exist) {
      if (err) reject(err);
      if (!exist || exist == 0) reject("Key does not exist");
      resolve(key);
    });
  });
};

const hexistsAndHget = (hash, key) => {
  return new Promise(async (resolve, reject) => {
    try {
      const k = await hexists(hash, key);
      const data = await hget(hash, k);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *
 * @param {*} hash
 * @param {*} key
 * @returns the deleted key from redis.
 */
const del = (hash, key) => {
  return new Promise(async (resolve, reject) => {
    redisClient.del(hash, key, (error, key) => {
      if (error) reject(error);
      if (!key) reject("Key does not exist");
      resolve(key);
    });
  });
};

const hdel = (hash, key) => {
  return new Promise(async (resolve, reject) => {
    redisClient.hdel(hash, key, (error, key) => {
      if (error) reject(error);
      if (!key) reject("Key does not exist");
      resolve(key);
    });
  });
};

module.exports = {
  redis: redisClient,
  hset,
  hget,
  hexists,
  hexistsAndHget,
  del,
  hdel,
};
