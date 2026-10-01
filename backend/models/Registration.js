
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  registrationId: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  teamName: String,
  teamMembers: [{
    name: String,
    email: String,
    phone: String,
    college: String,
    usn: String
  }],
  paymentStatus: { type: String, enum: ['PENDING', 'SUCCESSFUL', 'FAILED'], default: 'PENDING' },
  registrationStatus: { type: String, enum: ['PAYMENT PENDING', 'PAYMENT VERIFIED', 'REGISTRATION CONFIRMED', 'CANCELLED'], default: 'PAYMENT PENDING' },
  razorpayPaymentId: String,
  razorpayOrderId: String,
  amount: Number
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);
