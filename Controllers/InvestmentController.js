const User = require('../Models/User');
const Farm = require('../Models/Farm');

exports.getInvestments = async (req, res) => {
  const farms = await Farm.find({ status: 'active' });
  res.json({ farms });
};

exports.investInFarm = async (req, res) => {
  const { farmId, investmentAmount } = req.body;
  const userId = req.user._id;

  const farm = await Farm.findById(farmId);
  if (!farm || farm.status !== 'active') {
    return res.status(400).json({ error: 'Invalid farm' });
  }

  const user = await User.findById(userId);
  if (user.investmentBalance < investmentAmount) {
    return res.status(400).json({ error: 'Insufficient balance' });
  }

  user.investmentBalance -= investmentAmount;
  farm.investmentOptions.find(option => option.investmentAmount === investmentAmount).availableSlots--;
  await user.save();
  await farm.save();

  res.json({ message: 'Investment successfully completed' });
};
