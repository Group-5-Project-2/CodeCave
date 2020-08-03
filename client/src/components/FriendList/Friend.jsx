import React from "react";
import RemoveButton from "./RemoveButton";
import "./style.css"

function Friend(props) {
	return <div className="friend">
		<span>{props.name}</span><RemoveButton id={props.id}/>
	</div>;
}

export default Friend;