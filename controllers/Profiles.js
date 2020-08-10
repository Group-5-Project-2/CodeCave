const express = require("express");
const profiles = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

profiles.use(cors());
process.env.SECRET_KEY = "secret";

// grab our users data
const Profile = require("../models/profile");
const User = require("../models/user");

profiles.post("/profilePage", (req, res) => {
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
		userId: req.body.userId,
	};

	Profile.create(profileData)
		.then((profile) => {
			res.json({ status: "complete!" });
		})
		.catch((err) => {
			res.send("error: " + err);
		});
});
profiles.get("/profiles", (req, res) => {
	// let token = () => {
	//     jwt.sign(profiles.dataValues, process.env.SECRET_KEY, {
	//     expiresIn: 1440
	// })}
	// token();
	// var decoded = jwt.verify(
	// 	req.headers["authorization"],
	// 	process.env.SECRET_KEY
	// );
	// Profile.findAll().then((dbprofile) => {
	// 	res.status(200).json(dbprofile);
	// }) .catch((err) => {
	//     res.status(500).json({status: 500, message: err.message})
	// })
	let query = {};
	if (req.query.id) {
		query.userId = req.query.id;
	}
	Profile.findAll({ where: query, include: [User] }).then((profile) => {
        res.json(profile);
	});

	// Profile.findOne({
	// 	where: {
	// 		userId: decoded.id,
	// 	},
	// })
	// 	.then((profile) => {
	// 		// if (profile) {
	// 		// 	res.json(profile);
	//         // }
	//         if (profile) {
	//             let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
	//                 expiresIn: 1440
	//             })
	//             res.send(token)
	//         }
	// 	})
	// 	.catch((err) => {
	// 		res.send("error: " + err);
	// 	});
});

module.exports = profiles;
