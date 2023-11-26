const express = require("express");
const router = express.Router();
const Task = require("../../../Model/Task");

router.get("/upcommingtask", async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    const tasks = await Task.find({ userId, status: "To Do" });

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ error: "Tasks not found" });
    }

    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
