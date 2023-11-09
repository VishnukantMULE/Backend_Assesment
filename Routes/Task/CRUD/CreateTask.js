const express = require("express");
const bodyParser = require("body-parser");
const Task = require("../../../Model/Task");
const User = require("../../../Model/User");
const router = express.Router();

router.use(bodyParser.json());

router.post("/createtask", async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    const newTask = new Task({
      title,
      description,
      userId,
    });

    await newTask.save();
    await User.findByIdAndUpdate(userId, { $push: { tasks: newTask._id } });

    res
      .status(201)
      .json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
