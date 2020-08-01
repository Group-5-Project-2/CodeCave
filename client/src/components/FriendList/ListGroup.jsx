import React from "react"
import Friend from "./Friend"

function ListGroup(props) {
    return (
        <div>
            {props.friends.map(f => <Friend key={f.id} name={f.name} />)}
        </div>
    )
}

export default ListGroup;