module.exports = {
  development: {
    "dialect": process.env.DB_DIALECT,
    "username": process.env.DB_USERNAME,
    "password":process.env.DB_PASSWORD ,
    "database":process.env.DB_DATABASE ,
    "host":process.env.DB_HOST,
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        "require": true
      }
    }
  },
  test: {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  production: {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
}
