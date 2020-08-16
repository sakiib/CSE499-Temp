const express = require('express');
const router = express.Router();
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
const { signup, signin } = require('../../controller/admin/auth');

// @route POST /api/admin/signin
// @desc signin admin
// @access Admin
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);

// @route POST /api/admin/signup
// @desc signin admin
// @access Admin
router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);

module.exports = router;