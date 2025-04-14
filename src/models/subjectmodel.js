const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import your Sequelize instance

const Subject = sequelize.define(
  "subjects",
  {
    subject_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    standard: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true, //  Prevents Sequelize from adding `createdAt` & `updatedAt`
  }
);

module.exports = Subject;
