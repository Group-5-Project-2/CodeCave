import React from "react"
import Button from "react-bootstrap/Button"

function RemoveButton() {
    return (
        <Button onClick={() => console.log("does it work yet?")} variant="danger" size="sm">Remove</Button>
    )
}

export default RemoveButton;