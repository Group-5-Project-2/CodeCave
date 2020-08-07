import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./style.css";

const JobSearch = () => {
	// state goes here
	const [searchValue, setSearchValue] = useState({ city: "", jobTitle: "" });

	function seachJobs(event) {
		event.preventDefault();
		console.log(`${searchValue.city} ${searchValue.jobTitle}`);

		var config = {
			method: "get",
			url: `/jobs/search?title=${searchValue.jobTitle}&location=${searchValue.city}`,
			headers: {},
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function onChange(event) {
		const { name, value } = event.target;
		setSearchValue({ ...searchValue, [name]: value });
	}

	return (
		<div className="searchForm">
			<Form onSubmit={seachJobs} inline>
				<FormControl
					onChange={onChange}
					type="text"
					name="city"
					value={searchValue.city}
					placeholder="City"
					className="mr-sm-2"
				/>
				<FormControl
					onChange={onChange}
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
