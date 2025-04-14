const Marks = require("../models/marksmodel");

// Get all marks
exports.getAllMarks = async (req, res) => {
  try {
    const marks = await Marks.findAll();
    res.status(200).json(marks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new marks
exports.addMarks = async (req, res) => {
  try {
    const { student_id, subject_id, marks } = req.body;
    
    const newMarks = await Marks.create({ student_id, subject_id, marks });
    res.status(201).json(newMarks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update marks by ID
exports.updateMarks = async (req, res) => {
  try {
    const { id } = req.params;
    const { marks } = req.body;

    const markRecord = await Marks.findByPk(id);
    if (!markRecord) {
      return res.status(404).json({ message: "Marks record not found" });
    }

    markRecord.marks = marks;
    await markRecord.save();

    res.status(200).json({ message: "Marks updated successfully", markRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete marks by ID
exports.deleteMarks = async (req, res) => {
  try {
    const { id } = req.params;
    const markRecord = await Marks.findByPk(id);

    if (!markRecord) {
      return res.status(404).json({ message: "Marks record not found" });
    }

    await markRecord.destroy();
    res.status(200).json({ message: "Marks deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
