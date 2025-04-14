const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Your Sequelize instance
const Student = require("./studentModel");
const Subject = require("./subjectmodel");

const Marks = sequelize.define("Marks", {
  marks_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  subject_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subject,
      key: "subject_id",
    },
    onDelete: "CASCADE",
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define Relationships
Marks.belongsTo(Student, { foreignKey: "student_id", onDelete: "CASCADE" });
Marks.belongsTo(Subject, { foreignKey: "subject_id", onDelete: "CASCADE" });

module.exports = Marks;
