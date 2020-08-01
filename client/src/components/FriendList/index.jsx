// import necessary dependencies
import React from "react";
import ListHeader from "./ListHeader"
import ListGroup from "./ListGroup"
import friends from "./friendTest.json"

// create main functional component
function FriendList() {
    return (
        <div>
        <ListHeader />
        <ListGroup friends={friends}/>
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

