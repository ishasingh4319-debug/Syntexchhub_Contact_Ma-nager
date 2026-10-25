const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required.'], trim: true, maxlength: [80, 'Name must be 80 characters or fewer.'] },
  email: { type: String, required: [true, 'Email is required.'], trim: true, lowercase: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Enter a valid email address.'], maxlength: 120 },
  phone: { type: String, required: [true, 'Phone number is required.'], trim: true, minlength: [7, 'Phone number must have at least 7 characters.'], maxlength: [25, 'Phone number must be 25 characters or fewer.'] },
  company: { type: String, trim: true, maxlength: 100, default: '' },
  notes: { type: String, trim: true, maxlength: 500, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
