"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        username: "LithiumAdmin",
        email: "lithium@develop.com.uy",
        password:
          "$2b$10$NKPDUGB4OP8fLVkilpNu7OU13I6RT.l/qCeAEZJlNx9mkt82H/Vdu",
        fullName: "Lithium Team",
        role: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
