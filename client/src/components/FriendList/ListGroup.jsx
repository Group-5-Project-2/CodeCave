import React from "react"
import Friend from "./Friend"

function ListGroup(props) {
    const list = props.friends.map(f => <Friend key={f.id} name={f.name} />)
    return (
        <div className="list-group">
            {list}
        </div>
    )
}

export default ListGroup;