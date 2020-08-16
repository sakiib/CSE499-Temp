const express = require('express');
const router = express.Router();
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const { signup, signin } = require('../controller/auth');

// @route POST /api/signup
// @desc POST a user signup request
// @access User
router.post('/signup', validateSignupRequest, isRequestValidated, signup);

// @route POST /api/signin
// @desc POST a user signin request
// @access User
router.post('/signin', validateSigninRequest, isRequestValidated, signin);

module.exports = router;