const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/signin', (req, res) => {

});

router.post('/signup', (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if (error) {
            return res.status(400).json({
                message: 'someting went wrong up'
            });
        }
        if (user) {
            return res.status(404).json({
                message: 'email already registered',
            });
        }
        const { firstName, lastName, email, password } = req.body;

        const _user = new User({ 
            firstName, lastName, email, password, username: Math.random().toString()
        });
        _user.save((error, data) => {
            if (error) {
                return res.status(400).json({
                    message: 'someting went wrong down'
                });
            }
            if (data) {
                return res.status(201).json({
                    message: 'user created successfully!'
                });
            }
        });
    });
});

module.exports = router;