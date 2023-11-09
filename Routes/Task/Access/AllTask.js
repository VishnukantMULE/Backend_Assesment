const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require("../../../Model/Task");

router.get("/showalltask", async (req, res) => {
  try {
    const { userId } = req.body;
    const { pageNumber, pageSize } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    if (!pageNumber || !pageSize) {
      return res
        .status(400)
        .json({ error: "Page number and size are required." });
    }

    const tasks = await Task.find({ userId })
      .skip((pageNumber - 1) * pageSize)
      .limit(parseInt(pageSize));

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ error: "Tasks not found" });
    }

    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
