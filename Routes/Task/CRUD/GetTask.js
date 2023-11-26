const express = require("express");
const bodyParser = require("body-parser");
const Task = require("../../../Model/Task");
const router = express.Router();

router.use(bodyParser.json());

router.get("/gettask", async (req, res) => {
  try {
    const taskId = req.body.taskId;
    console.log(taskId);
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ task });
  } catch (error) {
    console.error("Error retrieving task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
