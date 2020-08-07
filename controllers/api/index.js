const router = require('express').Router();
const jobSearchRoutes = require('./jobSearch.js')
var db = require('../../models');

// const userRoutes = require('./user');
router.post('/api/signup', function (req, res) {
    db.User.create({
        userName: "Cmb",
        email: req.body.email,
        password: req.body.password
    })
        .then(function () {
            res.redirect(307, "/");
        })
        .catch(function (err) {
            res.status(401).json(err);
        })

});

// insert routes
router.use("/jobs", jobSearchRoutes);
// router.use('/user', userRoutes);

module.exports = router;