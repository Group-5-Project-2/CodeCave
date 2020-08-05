import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <Nav>
        <Nav.Link>
          <Link to="/login" className="nav-link">
            User Login
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/register" className="nav-link">
            New User Register
          </Link>
        </Nav.Link>
      </Nav>
    )

    const userLink = (
      <Nav>
        <Nav.Link>
          <Link to="/profile" className="nav-link">
            Welcome #User
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/channels" className="nav-link">
            Channels
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/friends" className="nav-link">
            Friends
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/messages" className="nav-link">
            Messages
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="" onClick={this.logOut.bind(this)} className="nav-link text-danger">
            Logout
          </Link> 
        </Nav.Link>
      </Nav>
    )

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/" className="nav-link">CodeCave</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/jobs" className="nav-link">
                Find Jobs
              </Link>
            </Nav.Link>
          </Nav>
          {localStorage.usertoken ? userLink : loginRegLink}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withRouter(Landing)