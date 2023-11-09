const mongoose = require('mongoose');
const PaginationSchema = new mongoose.Schema({
  pageNumber: Number,
  pageSize: Number,
});

module.exports = mongoose.model('Pagination', PaginationSchema);
