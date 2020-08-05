import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./style.css";
// import config from "./config";



const JobSearch = () => {
	// state goes here
	const [searchValue, setSearchValue] = useState({ city: "", jobTitle: "" });
	const [salarySearch, setSalarySearch] = useState("");

	function seachJobs(event) {
		event.preventDefault();
		console.log(`${searchValue.city} ${searchValue.jobTitle}`);
		var api_key = process.env.REACT_APP_SALARY_API_KEY;
		axios({
			method: "get",
			url: `https://indeed-com.p.rapidapi.com/salary/insights?title=${searchValue.jobTitle}&location=${searchValue.city}`,
			headers: {
				"x-rapidapi-host": "indeed-com.p.rapidapi.com",
				"x-rapidapi-key": api_key,
			},
		})
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function searchSalary(event) {
		event.preventDefault();
		console.log(salarySearch);
	}

	function handleJobChange(event) {
		const { name, value } = event.target;
		setSearchValue({ ...searchValue, [name]: value });
	}

	function handleSalaryChange(event) {
		const { value } = event.target;
		setSalarySearch(value);
	}

	return (
		<div className="searchForm">
			<Form onSubmit={seachJobs} inline>
				<FormControl
					onChange={handleJobChange}
					type="text"
					name="city"
					value={searchValue.city}
					placeholder="City"
					className="mr-sm-2"
				/>
				<FormControl
					onChange={handleJobChange}
					type="text"
					name="jobTitle"
					value={searchValue.jobTitle}
					placeholder="Job Title"
					className="mr-sm-2"
				/>
				<Button type="submit" variant="outline-success">
					Search
				</Button>
			</Form>
		</div>
	);
};

export default JobSearch;




// var config = {
// 	method: 'get',
// 	url: 'https://indeed-com.p.rapidapi.com/salary/insights?title=web developer&location=austin',
// 	headers: { 
// 	  'x-rapidapi-host': 'indeed-com.p.rapidapi.com', 
// 	  'x-rapidapi-key': 'b4e0d076eamsh2aad7c9cc23c6ddp1f03eajsn735dc906d3ea'
// 	}
//   };
  
//   axios(config)
//   .then(function (response) {
// 	console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
// 	console.log(error);
//   });
  

// https://cors-anywhere.herokuapp.com/