const Student = require("../models/studentModel");

// ✅ Create a new student
exports.createStudent = async (req, res) => {
  try {
    const { name, age, standard,status} = req.body;
    console.log("Request body:", req.body); // Log the request body for debugging

    // Ensure all required fields are provided
    if (!name || !age || !standard) {
      return res.status(400).json({
        success: false,
        message: "Name, age,standard,status are required",
      });
    }

    // ✅ Insert data into MySQL
    const newStudent = await Student.create({ name, age, standard,status });

    res.status(201).json({
      success: true,
      message: "Student added successfully",
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();

    res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Search a student by name and return the ID
exports.getStudentByName = async (req, res) => {
  try {
    const { name } = req.body; // Search by name from request body
    const student = await Student.findOne({ where: { name } });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student found",
      data: { id: student.id, name: student.name },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update student details
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params; // Get student ID from URL
    const { name, age, standard } = req.body; // Get updated values

    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // ✅ Update student data
    await student.update({ name, age, standard });

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete a student
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params; // Get student ID from URL

    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    await student.destroy();

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
