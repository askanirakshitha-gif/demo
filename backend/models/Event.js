
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  date: String,
  time: String,
  venue: String,
  teamSize: String,
  fee: Number,
  prizePool: String,
  coordinator: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
