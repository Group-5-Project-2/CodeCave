// import express and axios
const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

// prepare router to use route
router.get("jobs/search", (req, res) => {
	// assign queries to variables
	const queryTitle = req.query.title;
	const queryLocation = req.query.location;
	// log queries
	console.log(`title: ${queryTitle}, location: ${queryLocation}`);

	// configuration to get average salary data
	var config1 = {
		method: "get",
		url: `https://indeed-com.p.rapidapi.com/salary/insights?title=${queryTitle}&location=${queryLocation}`,
		headers: {
			"x-rapidapi-host": "indeed-com.p.rapidapi.com",
			"x-rapidapi-key": process.env.API_KEY,
		},
	};

	// configuration to get job listings data
	var config2 = {
		method: "get",
		url: `https://indeed-com.p.rapidapi.com/search/jobs?query=${queryTitle}&location=${queryLocation}`,
		headers: {
			"x-rapidapi-host": "indeed-com.p.rapidapi.com",
			"x-rapidapi-key": process.env.API_KEY,
		},
	};

	// send both requests and combine data into a single object
	return axios.all([axios(config1), axios(config2)]).then(
		axios.spread((res1, res2) => {
			const resultsData = []
			const salaryData = {"averageSalary": res1.data.averageSalary.toFixed(2)};
			const jobListings = res2.data.results.slice(0, 10);
			resultsData.push(salaryData, jobListings);
			res.send(resultsData);
		})
	);
});

module.exports = router;