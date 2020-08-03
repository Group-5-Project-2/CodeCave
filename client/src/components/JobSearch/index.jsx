import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from 'axios';

class JobSearch extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-success">Search</Button>
			</Form>
		);
	}
}

export default JobSearch;
