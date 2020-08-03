// import necessary dependencies
import React, { useState } from "react";
import ListHeader from "./ListHeader"
import ListGroup from "./ListGroup"
import friends from "./friendTest.json"
import SearchFriends from "./SearchFriends"
import "./style.css"

// create main functional component
function FriendList() {
    const [currentFriends, setFriends] = useState(friends)

    
    return (
        <div className="friend-list">
        <ListHeader />
        <ListGroup friends={currentFriends}/>
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

