const options = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  logging: false,
  seederStorage: "sequelize",
  seederStorageTableName: "SequelizeData",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
    paranoid: true,
  },
};

module.exports = {
  development: options,
  test: options,
  production: options,
};
