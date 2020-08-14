const User = require('../../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if (error) {
            return res.status(400).json({
                message: 'someting went wrong up'
            });
        }
        if (user) {
            return res.status(404).json({
                message: 'admin already registered',
            });
        }
        const { firstName, lastName, email, password } = req.body;

        const _user = new User({ 
            firstName, lastName, email, password, username: Math.random().toString(), role: 'admin'
        });
        _user.save((error, data) => {
            if (error) {
                return res.status(400).json({
                    message: 'someting went wrong down'
                });
            }
            if (data) {
                return res.status(201).json({
                    message: 'admin created successfully!'
                });
            }
        });
    });
};

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        if (user) {
            if (user.authenticate(req.body.password) && user.role === 'admin') {
                const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
                const {firstName, lastName, email, role, fullName} = user;
                res.status(200).json({
                    token,
                    user: {
                        firstName, lastName, email, role, fullName
                    }
                });
            } else {
                return status(400).jsond({
                    message: 'invalid password'
                });
            }
        } else {
            return res.status(400).json({
                message: 'something went wrong'
            });
        }
    });
};