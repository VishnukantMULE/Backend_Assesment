const express = require('express');
const bodyParser = require('body-parser');
const User  = require('../../Model/User'); 

const router = express.Router();

router.use(bodyParser.json());

router.post('/createuser', (req, res) => {
  const { username, userAuthentication, password } = req.body;

  const newUser = new User({
    username,
    userAuthentication,
    password,
  });

  newUser.save((err, savedUser) => {
    if (err) {
      console.error('Error saving user:', err);
      res.status(500).send('Error saving user');
    } else {
      console.log('User saved successfully:', savedUser);
      res.status(201).json(savedUser);
    }
  });
});

module.exports = router;
