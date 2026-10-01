const fs = require('fs');
const path = require('path');

const dirs = ['models', 'routes', 'controllers', 'middlewares'];
dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d);
  }
});

// models/User.js
fs.writeFileSync(path.join('models', 'User.js'), `
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
`);

// models/Event.js
fs.writeFileSync(path.join('models', 'Event.js'), `
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
`);

// models/Registration.js
fs.writeFileSync(path.join('models', 'Registration.js'), `
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
`);

// routes/authRoutes.js
fs.writeFileSync(path.join('routes', 'authRoutes.js'), `
const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => { res.json({ msg: 'Register endpoint' }) });
router.post('/login', (req, res) => { res.json({ msg: 'Login endpoint' }) });

module.exports = router;
`);

// index.js
fs.writeFileSync('index.js', `
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));

app.get('/', (req, res) => {
  res.send('Tech Habba 2K26 API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
`);

console.log('Backend structure generated.');
