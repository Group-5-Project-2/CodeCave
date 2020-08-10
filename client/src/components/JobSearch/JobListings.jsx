import React from "react";
import Job from "./Job";

const JobListings = (props) => {
	const listings = props.listings.map((j) => (
		<Job key={j.jobkey} title={j.jobtitle} company={j.company} location={j.formattedLocationFull} url={j.url} relativeTime={j.formattedRelativeTime}></Job>
	));
	return <div className="job-listings">{listings}</div>;
};

export default JobListings;
