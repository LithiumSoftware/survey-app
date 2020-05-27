"use-strict";

module.exports = (sequelize, DataTypes) => {
  const Survey = sequelize.define(
    "survey",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      opened: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      published: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );

  Survey.associate = function (models) {
    Survey.belongsTo(models.user, {
      foreignKey: "userId",
      as: "user",
    });

    Survey.hasMany(models.question, {
      foreignKey: "surveyId",
      as: "questions",
    });
  };

  return Survey;
};
