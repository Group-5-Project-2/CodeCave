import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import SearchResults from "./SearchResults";
import axios from "axios";
import "./style.css";



const JobSearch = () => {
	// state goes here
	const [searchValue, setSearchValue] = useState({ city: "", jobTitle: "" });
	const [averageSalary, setAverageSalary] = useState(0);
	const [isDataLoaded, setIsDataLoaded] = useState(false)

	function renderResults () {
		if (isDataLoaded === true) {
			
			return <SearchResults title={searchValue.jobTitle} city={searchValue.city} avgSalary={averageSalary}> </SearchResults>
		}
	}
	
	
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
				setAverageSalary(response.data[0].averageSalary);
				setIsDataLoaded(true)
				
			})
			.catch(function (error) {
				console.log(error);
			});
			renderResults();
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
			{renderResults()}
		</div>
	);
};

export default JobSearch;
