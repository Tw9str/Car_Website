const mongoose = require('mongoose');

const reviewScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const review = mongoose.model('Car', reviewScheme);

module.exports = review;
