"use-strict";

const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Email address must be valid",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["USER", "ADMIN"],
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          {
            user.password =
              user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
          }
        },
      },
    }
  );

  User.associate = function (models) {
    User.hasMany(models.survey, {
      foreignKey: "userId",
      as: "surveys",
    });

    User.belongsToMany(models.option, {
      through: "answers",
      foreignKey: "userId",
    });
  };

  return User;
};
