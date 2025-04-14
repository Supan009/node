const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Subject = sequelize.define(
  "students",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    standard: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
    tableName: "students",
  }
);

module.exports = Subject;
