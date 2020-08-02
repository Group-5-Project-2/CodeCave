import React from "react";
import Form from "react-bootstrap/form";
import { FormControl } from "react-bootstrap/";
import Button from "react-bootstrap/button";
import "./style.css";

function SearchFriends() {
	return (
		<Form className="search-friends" inline>
			<FormControl type="text" placeholder="Find Friends" className="mr-sm-2" />
			<Button variant="outline-success">Search</Button>
		</Form>
	);
}

export default SearchFriends;
