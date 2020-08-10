import React from "react";
import Card from "react-bootstrap/Card";

const SearchResults = (props) => {
	return (
		<Card body>
			<h1>
				Average Salary for {props.title} in {props.city}: ${props.avgSalary}
			</h1>
		</Card>
	);
};

export default SearchResults;
