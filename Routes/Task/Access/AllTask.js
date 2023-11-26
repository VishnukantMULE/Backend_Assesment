const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require("../../../Model/Task");
const User = require("../../../Model/User");

router.get("/showalltask", async (req, res) => {
  try {
    const userId = req.body.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid User ID format" });
    }

    const user = await User.findById(userId).populate("tasks");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const tasks = user.tasks;

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ error: "Tasks not found for the user" });
    }

    res.json({ tasks });
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
