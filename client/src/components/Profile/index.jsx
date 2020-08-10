import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			first_name: "",
			last_name: "",
			user_name: "",
			email: "",
			errors: {},
		};
	}

	componentDidMount() {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);
		this.setState({
			first_name: decoded.first_name,
			last_name: decoded.last_name,
			user_name: decoded.user_name,
			email: decoded.email,
		});
	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron mt-5">
					<div className="col-sm-8 mx-auto">
						<h1 className="text-center">PROFILE</h1>
					</div>
					<div className="btn btn-danger">
						<Link to="/profilePage">Edit Your Profile</Link>
					</div>
					<table className="table col-md-6 mx-auto">
						<tbody>
							<tr>
								<td>Fist Name</td>
								<td>{this.state.first_name}</td>
							</tr>
							<tr>
								<td>Last Name</td>
								<td>{this.state.last_name}</td>
							</tr>
							<tr>
								<td>User Name</td>
								<td>{this.state.user_name}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>{this.state.email}</td>
							</tr>
							<tr>
								<td>Job Title</td>
								<td>{this.state.job_title}</td>
							</tr>
							<tr>
								<td>Resume</td>
								<td>{this.state.resume}</td>
							</tr>
							<tr>
								<td>Portfolio</td>
								<td>{this.state.portfolio}</td>
							</tr>
							<tr>
								<td>City</td>
								<td>{this.state.city}</td>
							</tr>
							<tr>
								<td>State</td>
								<td>{this.state.state}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default withRouter(Profile);
