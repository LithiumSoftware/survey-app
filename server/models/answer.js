"use-strict";

module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
    "answer",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: {
          model: "users",
          key: "id",
        },
      },
      optionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "options",
          key: "id",
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );

  Answer.associate = function(models) {
    Answer.belongsTo(models.user, { foreignKey: "userId" });
    Answer.belongsTo(models.option, { foreignKey: "optionId" });
  };

  return Answer;
};
