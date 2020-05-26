"use-strict";

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "question",
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
      surveyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "surveys",
          key: "id",
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );

  Question.associate = function (models) {
    Question.belongsTo(models.survey, { foreignKey: "surveyId", as: "survey" });
    Question.hasMany(models.option, {
      foreignKey: "questionId",
      as: "options",
    });
  };

  return Question;
};
