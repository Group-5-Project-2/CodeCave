import React from "react";
import RemoveButton from "./RemoveButton";
import "./style.css"

function Friend(props) {
	return <div className="friend">
		<span key={props.id}>{props.name}</span> <RemoveButton key={props.id}/>
	</div>;
}

export default Friend;
