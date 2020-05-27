"use-strict";

module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define(
    "option",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "questions",
          key: "id",
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );

  Option.associate = function (models) {
    Option.belongsTo(models.question, {
      foreignKey: "questionId",
      as: "question",
    });
    Option.belongsToMany(models.user, {
      through: "answers",
      foreignKey: "optionId",
    });
  };

  return Option;
};
