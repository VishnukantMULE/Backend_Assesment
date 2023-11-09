const mongoose = require('mongoose');
require('dotenv').config()


const url=process.env.MongoDb_URL
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

module.exports = db;
