import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
// import config from "./config";

var config = {
    method: "get",
    url:
        "https://indeed-com.p.rapidapi.com/search/jobs?query=web%20developer&location=austin,%20tx",
    headers: {
        "x-rapidapi-host": "indeed-com.p.rapidapi.com",
        "x-rapidapi-key": "b4e0d076eamsh2aad7c9cc23c6ddp1f03eajsn735dc906d3ea",
    },
};


function seachJobs(e) {
e.preventDefault();
	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});
}

class JobSearch extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Form onSubmit={seachJobs} inline>
					<FormControl
						type="text"
						placeholder="Job Title"
						className="mr-sm-2"
					/>
					<FormControl type="text" placeholder="City" className="mr-sm-2" />
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
					<Button
						type="submit" 
						variant="outline-success"
					>
						Search
					</Button>
				</Form>
			</div>
		);
	}
}

export default JobSearch;
