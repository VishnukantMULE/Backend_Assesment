const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require("../../../Model/Task");

router.delete("/deleteTask", async (req, res) => {
  try {
    const { taskId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
      return res.status(400).json({ error: "Invalid task ID" });
    }

    const task = await Task.findByIdAndRemove(taskId);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    const userId = task.userId;
    await User.findByIdAndUpdate(userId, { $pull: { tasks: taskId } });

    res.json({ message: "Task deleted successfully", task });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
