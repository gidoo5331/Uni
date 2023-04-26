import { Sequelize } from "../db/models";

const sequelize = new Sequelize(
 process.env.DB ,
  );

module.exports = sequelize; 