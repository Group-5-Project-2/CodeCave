import React from "react";
import RemoveButton from "./RemoveButton";
import "./style.css"

function Friend(props, {onRemoveFriend}) {
	return <div className="friend">
		<span >{props.name}</span> <RemoveButton id={props.id} onRemoveFriend={props.onRemoveFriend}/>
	</div>;
}

export default Friend;
