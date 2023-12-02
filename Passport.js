const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google-signin-callback',
}, function(accessToken, refreshToken, profile, done) {
    done(null, { googleId: profile.id, email: profile.emails[0].value, name: profile.displayName });
}));
