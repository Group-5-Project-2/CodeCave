import React from "react";
import RemoveButton from "./RemoveButton";
import "./style.css"

function Friend(props, {onRemoveFriend}) {
	return <div className="friend">
		<span key={props.id}>{props.name}</span> <RemoveButton test={props.test} key={props.id}/>
	</div>;
}

export default Friend;
