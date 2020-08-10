const express = require('express');
const profiles = express.Router();

// grab our users data
const Profile = require('../models/profile');

profiles.post('/profilePage', (req, res) => {
    const today = new Date();
    const profileData = {
        job_title: req.body.job_title,
        profile_picture: req.body.profile_picture,
        resume: req.body.resume,
        github: req.body.github,
        portfolio: req.body.portfolio,
        about_me: req.body.about_me,
        city: req.body.city,
        state: req.body.state,
        created: today,
        userId: req.body.userId
    };


    Profile.create(profileData)
        .then(profile => {
            res.json({ status: 'complete!' });
        })
        .catch(err => {
            res.send('error: ' + err);
        });
});


module.exports = profiles;