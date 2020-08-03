// import necessary dependencies
import React, { useState } from "react";
import ListHeader from "./ListHeader";
import ListGroup from "./ListGroup";
import friends from "./friendTest.json";
import SearchFriends from "./SearchFriends";
import "./style.css";

// create main functional component
function FriendList() {
	const [currentFriends, setFriends] = useState(friends);

	function removeFriend(id) {
		const newList = currentFriends.filter((item) => item.id !== id);
		setFriends(newList);
	}
	return (
		<div className="friend-list">
			<ListHeader />
			<ListGroup friends={currentFriends} remove={removeFriend} />
			<SearchFriends />
		</div>
	);
}

// Export functional component
export default FriendList;
// creat subcomponents
// add subcomponents to main functional component
// add test route to view component
// add event listeners and any necessary functions
// test with dummy data
// style
