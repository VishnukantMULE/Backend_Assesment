const express = require('express');
const router = express.Router();
const Task = require('../../../Model/Task'); 

router.post('/search', async (req, res) => {
  const { query, pageNumber, pageSize } = req.body;

  if (!pageNumber || !pageSize) {
    return res.status(400).json({ error: 'Page number and size are required.' });
  }

  try {
    const tasks = await Task.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ]
    })
    .skip((pageNumber - 1) * pageSize)
    .limit(parseInt(pageSize));

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ error: 'Tasks not found' });
    }

    res.json({ tasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
