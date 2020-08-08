const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const { signup, signin } = require('../../controller/admin/auth');

router.post('/admin/signin', signin);
router.post('/admin/signup', signup);

module.exports = router;