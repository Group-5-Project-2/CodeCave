import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
// import config from "./config";

const JobSearch = () => {
	// state goes here
	const [searchValue, setState] = useState({ city: "", jobTitle: "" });

	function seachJobs(event) {
		event.preventDefault();
		console.log(searchValue.city + "" + searchValue.jobTitle);
		// axios(config)
		// 	.then(function (response) {
		// 		console.log(JSON.stringify(response.data));
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setState({
			[name]: value,
		});
	}

	return (
		<div className="searchForm">
			<Form onSubmit={seachJobs} inline>
				<FormControl
					onChange={handleChange}
					type="text"
					name="city"
					value={searchValue.city}
					placeholder="Job Title"
					className="mr-sm-2"
				/>
				<FormControl
					onChange={handleChange}
					type="text"
					name="jobTitle"
					value={searchValue.jobTitle}
					placeholder="City"
					className="mr-sm-2"
				/>
				<Button type="submit" variant="outline-success">
					Search
				</Button>
			</Form>
			<Form inline>
				<FormControl
					type="text"
					placeholder="Search Average Salary"
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
