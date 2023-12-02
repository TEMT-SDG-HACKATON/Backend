const express = require('express');
const authController = require('../Controllers/AuthController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/google-login', authController.googleSignin);
router.get('/google-signin-callback', authController.googleSigninCallback);

module.exports = router;
