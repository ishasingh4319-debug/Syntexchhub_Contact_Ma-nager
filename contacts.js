const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../models/Contact');
const router = express.Router();

const fields = ['name', 'email', 'phone', 'company', 'notes'];
function cleanPayload(body) {
  const data = {};
  for (const field of fields) if (body[field] !== undefined) data[field] = body[field];
  return data;
}
function validId(req, res, next) {
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: 'Invalid contact ID.' });
  next();
}

router.get('/', async (req, res, next) => {
  try {
    const search = String(req.query.search || '').trim();
    const filter = search ? { $or: ['name', 'email', 'phone', 'company'].map(key => ({ [key]: { $regex: search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), $options: 'i' } })) } : {};
    const contacts = await Contact.find(filter).sort({ name: 1 }).lean();
    res.json(contacts);
  } catch (err) { next(err); }
});
router.get('/:id', validId, async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found.' });
    res.json(contact);
  } catch (err) { next(err); }
});
router.post('/', async (req, res, next) => {
  try {
    const contact = await Contact.create(cleanPayload(req.body || {}));
    res.status(201).json(contact);
  } catch (err) { next(err); }
});
router.put('/:id', validId, async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, cleanPayload(req.body || {}), { new: true, runValidators: true });
    if (!contact) return res.status(404).json({ message: 'Contact not found.' });
    res.json(contact);
  } catch (err) { next(err); }
});
router.delete('/:id', validId, async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found.' });
    res.json({ message: 'Contact deleted successfully.' });
  } catch (err) { next(err); }
});
module.exports = router;
