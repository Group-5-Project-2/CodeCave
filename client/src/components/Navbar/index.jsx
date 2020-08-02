import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export default function () {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">CodeCave</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Jobs</Nav.Link>
            <Nav.Link href="#home">Message</Nav.Link>
            <Nav.Link href="#link">Channels</Nav.Link>
            <Nav.Link href="#link">Contact Support</Nav.Link>
            
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
}