const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoutes = require("./src/routes/studentroute");
const subjectRoutes = require("./src/routes/subjectroute");
const marksRoutes = require("./src/routes/marksRoute");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/student", studentRoutes);
app.use("/subject", subjectRoutes);
app.use("/mark", marksRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
