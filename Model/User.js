const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  userAuthentication: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
