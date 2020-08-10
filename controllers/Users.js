const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// grab our users data
const User = require('../models/user.js');

users.use(cors());
process.env.SECRET_KEY = 'secret';

// grab the info from where the data is coming from to go in the database
users.post('/register', (req, res) => {
    const today = new Date();
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    };


    User.findOne({
        where: {
            email: req.body.email
        }
    })
        //TODO bcrypt
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash;
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + ' Registered!' });
                        })
                        .catch(err => {
                            res.send('error: ' + err);
                        });
                });
            } else {
                res.json({ error: 'User already exists' });
            }
        })
        .catch(err => {
            res.send('error: ' + err);
        });
});

// This is for the user request to Login
users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        });
});


// This will show the correct profile as long as the info is matching
users.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    User.findOne({
        where: {
            id: decoded.id
        }
    })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send('User does not exist')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        });
});


module.exports = users;