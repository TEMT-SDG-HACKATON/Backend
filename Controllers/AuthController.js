const passport = require('passport');
const User = require('../Models/User');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });
  await user.save();

  res.status(201).json({ message: 'User successfully signed up' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (!user.verifyPassword(password)) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    const token = user.generateAccessToken();
    res.json({ token });
  });
};

exports.googleSignin = passport.authenticate('google-oauth20', {
  scope: ['profile', 'email'],
});

exports.googleSigninCallback = passport.authenticate('google-oauth20', { failureRedirect: '/login' }, async (req, res) => {
  const { googleId, email, name } = req.user;

  const user = await User.findOne({ googleId });
  if (!user) {
    await User.create({
      name,
      email,
      googleId,
    });
  }

  const token = user.generateAccessToken();
  res.json({ token });
});
