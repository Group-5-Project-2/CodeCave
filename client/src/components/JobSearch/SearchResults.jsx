import React from "react";

const SearchResults = (props) => {
    return <div><h1>Average Salary for {props.title} in {props.city}: ${props.avgSalary}</h1>
    </div>;
}

export default SearchResults