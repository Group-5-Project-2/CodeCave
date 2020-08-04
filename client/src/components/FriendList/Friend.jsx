import React from "react";
import RemoveButton from "./RemoveButton";
import "./style.css"

function Friend(props, {onRemoveFriend}) {
	return <div className="friend">
		<span >{props.name}</span> <RemoveButton id={props.id} test={props.test}/>
	</div>;
}

export default Friend;
