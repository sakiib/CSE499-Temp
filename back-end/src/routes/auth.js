const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const { signup, signin } = require('../controller/auth');

router.post('/signup', validateSignupRequest, isRequestValidated, signup);

router.post('/signin', validateSigninRequest, isRequestValidated, signin);

module.exports = router;