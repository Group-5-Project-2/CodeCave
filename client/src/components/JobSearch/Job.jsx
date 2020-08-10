import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Job = (props) => {
	return (
		<Card className="text-center">
			<Card.Header>{props.company}</Card.Header>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>Location: {props.location}</Card.Text>
				<Button href={props.url} variant="primary">
					Full Job Listing
				</Button>
			</Card.Body>
			<Card.Footer className="text-muted">{props.relativeTime}</Card.Footer>
		</Card>
	);
};

export default Job;
