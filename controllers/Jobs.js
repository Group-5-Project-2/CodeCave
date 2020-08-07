const router = require("express").Router();
const axios = require("axios")
require ("dotenv").config()


router.get("/search", async (req, res) => {
    console.log("seach route hit")
	const queryTitle = req.query.title;
	const queryLocation = req.query.location;
	console.log(`title: ${queryTitle}, location: ${queryLocation}`);

	var resultsData = [];

	var config1 = {
		method: "get",
		url: `https://indeed-com.p.rapidapi.com/salary/insights?title=${queryTitle}&location=${queryLocation}`,
		headers: {
			"x-rapidapi-host": "indeed-com.p.rapidapi.com",
			"x-rapidapi-key": process.env.API_KEY,
		},
    };
    
    var config2 = {
		method: "get",
		url: `https://indeed-com.p.rapidapi.com/search/jobs?query=${queryTitle}&location=${queryLocation}`,
		headers: {
			"x-rapidapi-host": "indeed-com.p.rapidapi.com",
			"x-rapidapi-key": process.env.API_KEY,
		},
    };
    
	await axios(config1)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			response.end(data);
		})
		.catch(function (error) {
			console.log(error);
		});
		
});

module.exports = router;

// https://cors-anywhere.herokuapp.com/