import React from "react"
import Friend from "./Friend"

function ListGroup(props) {
    return (
        <div className="list-group">
            {props.friends.map(f => <div><Friend key= {f.id} name={f.name} /> </div>)}
        </div>
    )
}

export default ListGroup;