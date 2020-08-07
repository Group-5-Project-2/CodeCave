// import Cave from "./Cave.jpg";
import "./login.css";
import React, { Component } from 'react'
import { login } from './../UserFunctions'
import Cave from "./../Landing/Cave.jpg"

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`)
      }
    })
  }

  render() {
    return (

          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h1 mb-3 font-weight-normal">Please Login</h1>
              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-dark btn-block"
              >
                Sign in
              </button>
            </form>
          <br />
          <p>New user sign up <a href="/signup">here</a></p>
          </div>
    )
  }
}

export default Login