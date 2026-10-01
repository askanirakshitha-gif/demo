
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  college: { type: String, required: true },
  usn: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['STUDENT', 'ADMIN'], default: 'STUDENT' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
