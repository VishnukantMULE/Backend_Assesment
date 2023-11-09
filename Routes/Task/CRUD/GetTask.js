const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require("../../../Model/Task");

router.get("/gettask", async (req, res) => {
  try {
    const { taskId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
      return res.status(400).json({ error: "Invalid task ID" });
    }

    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ task });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
