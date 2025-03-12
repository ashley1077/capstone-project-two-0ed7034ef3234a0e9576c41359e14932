const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  dueDate: Date, // New field for due date
});
