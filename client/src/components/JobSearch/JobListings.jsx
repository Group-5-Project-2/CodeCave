import React from "react";
import Job from "./Job";

const JobListings = (props) => {
	const listings = props.listings.map((job) => (
		<Job key={job.jobkey} title={job.jobtitle}></Job>
	));
	return <div className="job-listings">{listings}</div>;
};

export default JobListings;
