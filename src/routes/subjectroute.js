const express = require("express");
const {
  getAllSubjects,
  addSubject,
  updateSubject,
  deleteSubject,
} = require("../controllers/subjectcontroller");

const router = express.Router();

// Unified RESTful routes using /subject
router.get("", getAllSubjects); // GET /subject
router.post("", addSubject); // POST /subject
router.put("/:id", updateSubject); // PUT /subject/:id
router.delete("/:id", deleteSubject); // DELETE /subject/:id

module.exports = router;
