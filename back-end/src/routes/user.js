const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { signup } = require('../controller/user');

router.get('/signin', (req, res) => {

});

router.post('/signup', signup);

module.exports = router;