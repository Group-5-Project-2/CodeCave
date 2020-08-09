import React from "react";

const SearchResults = (props) => {
    return <div><p>Average Salary for {props.title} in {props.city}: ${props.avgSalary}</p></div>;
}

export default SearchResults