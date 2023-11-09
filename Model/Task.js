const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done'],
    default: 'To Do',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastAccessedAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TaskData', // Replace 'TaskData' with your actual TaskData model name
  }],
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
