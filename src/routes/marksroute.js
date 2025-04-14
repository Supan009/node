const express = require("express");
const {
  getAllMarks,
  addMarks,
  updateMarks,
  deleteMarks,
} = require("../controllers/markscontroller");
const router = express.Router();

// Marks Routes
router.get("", getAllMarks); // Get all marks
router.post("", addMarks); // Add marks
router.put("/:id", updateMarks); // Update marks by ID
router.delete("/:id", deleteMarks); // Delete marks by ID

module.exports = router;
