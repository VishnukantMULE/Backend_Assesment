const express = require('express');
const { User } = require('../../Model/User'); 

const router = express.Router();


router.get('/accessuser', async (req, res) => {
  try {
    const { userId } = req.body;

    

    
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
