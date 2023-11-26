const express = require("express");
const router = express.Router();
const Task = require("../../Model/Task");

router.get("/lastsevenday", async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const completedTasksCount = await Task.countDocuments({
      userId,
      status: "Completed",
      completedAt: { $gte: sevenDaysAgo },
    });

    res.json({ completedTasksCount });
  } catch (error) {
    console.error("Error in analytics endpoint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
