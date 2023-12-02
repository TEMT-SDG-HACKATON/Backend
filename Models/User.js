const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  googleId: { type: String },
  cardDetails: {
    cardNumber: { type: String },
    expirationDate: { type: String },
    cvv: { type: String },
  },
  investmentBalance: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
