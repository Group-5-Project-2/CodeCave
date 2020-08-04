import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import config from "./config";

function seachJobs() {
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
				<Form inline>
					<FormControl
						type="text"
						placeholder="Job Title"
						className="mr-sm-2"
					/>
					<FormControl type="text" placeholder="City" className="mr-sm-2" />
					<Button onClick={seachJobs} variant="outline-success">
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
						onClick={console.log("coming soon...")}
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
