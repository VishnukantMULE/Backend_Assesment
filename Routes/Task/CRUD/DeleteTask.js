const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const Task = require("../../../Model/Task");
const User = require("../../../Model/User");
router.use(bodyParser.json());
router.delete("/deletetask", async (req, res) => {
  try {
    const taskId = req.body.taskId;

    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await User.findByIdAndUpdate(task.userId, {
      $pull: { tasks: taskId },
    });

    await Task.findByIdAndDelete(taskId);

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
