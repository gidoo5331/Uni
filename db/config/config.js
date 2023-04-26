module.exports = {
  "development": {
    "dialect": process.env.DB_DIALECT,
    "username": process.env.DB_USERNAME,
    "password":process.env.DB_PASSWORD ,
    "database":process.env.DB_DATABASE ,
    "host":process.env.DB_HOST,
  },
  "test": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "postgres",
  },
  "production": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "postgres",
    "ssl": true,
  }
}
