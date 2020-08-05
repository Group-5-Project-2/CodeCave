const router = require("express").Router();

router.get("/search", function (req, res) {
	const queryTitle = req.query.title;
	const queryLocation = req.query.location;
	console.log(`title: ${queryTitle}, location: ${queryLocation}`);

	var resultsData = [];

	var config1 = {
		method: "get",
		url: `https://cors-anywhere.herokuapp.com/https://indeed-com.p.rapidapi.com/salary/insights?title=${queryTitle}&location=${queryLocation}`,
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
    
	axios(config1)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});
});

module.exports = router;