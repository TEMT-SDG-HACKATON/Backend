const User = require('../Models/User');

exports.addCardDetails = async (req, res) => {
  const { cardNumber, expirationDate, cvv } = req.body;
  const userId = req.user._id;

  await User.updateOne({ _id: userId }, { $set: { cardDetails: { cardNumber, expirationDate, cvv } } });
  res.json({ message: 'Card details successfully added' });
  if(expirationDate < Date.now()){
    res.json({message: 'Expired Card'})
  }
};

exports.updateCardDetails = async (req, res) => {
  const { cardNumber, expirationDate, cvv } = req.body;
  const userId = req.user._id;

  await User.updateOne({ _id: userId }, { $set: { cardDetails: { cardNumber, expirationDate, cvv } } });
  res.json({ message: 'Card details successfully updated' });
};
