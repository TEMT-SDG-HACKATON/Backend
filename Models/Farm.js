const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cropType: { type: String, required: true },
  investmentOptions: [
    {
      investmentAmount: { type: Number, required: true },
      returnPercentage: { type: Number, required: true },
      investmentDuration: { type: String, required: true },
    },
  ],
  status: { type: String, enum: ['active', 'pending', 'completed'], default: 'active' },
});

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
