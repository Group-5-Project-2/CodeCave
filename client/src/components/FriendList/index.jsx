// import necessary dependencies
import React from "react";
import ListHeader from "./ListHeader"
import ListGroup from "./ListGroup"
import friends from "./friendTest.json"
import SearchFriends from "./SearchFriends"
import "./style.css"

// create main functional component
function FriendList() {
    return (
        <div className="friend-list">
        <ListHeader />
        <ListGroup friends={friends}/>
        <SearchFriends />
        </div>
    )
}

// Export functional component
export default FriendList;
// creat subcomponents
// add subcomponents to main functional component
// add test route to view component
// add event listeners and any necessary functions
// test with dummy data
// style

