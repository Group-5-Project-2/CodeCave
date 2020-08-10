import React from 'react';
import { Card, Button } from 'react-bootstrap';
// import {Img, Body, Text} from 'react-bootstrap';
export default function Showcard(props) {
    return (
        <div className="col-sm-6 pb-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
        
                    </Card.Text>
                    <Button variant="dark" className="mr-2">
                        <a href={props.github} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                        </a>
                    </Button>
                    <Button variant="dark">
                        <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
