const User = require('../Models/User');

exports.getUser = async (req, res) => {
  const userId = req.user._id;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { name, investmentBalance } = user;
  res.json({ name, investmentBalance });
};
