const Subject = require("../models/subjectmodel");

// Get all subjects
exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new subject
exports.addSubject = async (req, res) => {
  try {
    const { subject_name, standard } = req.body;

    const newSubject = await Subject.create({ subject_name, standard });
    res.status(201).json(newSubject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update subject by subject_id
exports.updateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const { subject_name, standard } = req.body;

    const subject = await Subject.findOne({ where: { subject_id: id } });

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    subject.subject_name = subject_name;
    subject.standard = standard;

    await subject.save();

    res.status(200).json({ message: "Subject updated successfully", subject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Delete subject by ID
exports.deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const subject = await Subject.findByPk(id);

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    await subject.destroy();
    res.status(200).json({ message: "Subject deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
