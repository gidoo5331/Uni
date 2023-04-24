"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: { isEmail: { msg: "Please enter a valid email" } },
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email_verified: {
        type: Sequelize.DATE,
        field: "email_verified",
      },
      emailVerified: {
        type: Sequelize.DATE,
        field: "emailVerified",
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};