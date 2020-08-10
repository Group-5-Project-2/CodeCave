import React, { Component } from "react";
import { profile } from "./../UserFunctions";
import jwt_decode from "jwt-decode";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			job_title: "",
			profile_picture: "",
			resume: "",
			github: "",
			portfolio: "",
			about_me: "",
			city: "",
			state: "",
			userId: "",
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);
		this.setState({userId: decoded.id});
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();

		const newProfile = {
			job_title: this.state.job_title,
			profile_picture: this.state.profile_picture,
			resume: this.state.resume,
			github: this.state.github,
			portfolio: this.state.portfolio,
			about_me: this.state.about_me,
			city: this.state.city,
			state: this.state.state,
			userId: this.state.userId
		};

		profile(newProfile).then((res) => {
			this.props.history.push(`/profile`);
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 mt-5 mx-auto">
						<form noValidate onSubmit={this.onSubmit}>
							<h1 className="h3 mb-3 font-weight-normal">Profile Form</h1>
							<div className="form-group">
								<label htmlFor="job_title">Job Title</label>
								<input
									type="text"
									className="form-control"
									name="job_title"
									placeholder=" what is your job title?"
									value={this.state.job_title}
									onChange={this.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="profile_picture">Profile Picture</label>
								<input
									type="text"
									className="form-control"
									name="profile_picture"
									placeholder=" provide a link to your profile_picture"
									value={this.state.profile_picture}
									onChange={this.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="resume">Resume</label>
								<input
									type="text"
									className="form-control"
									name="resume"
									placeholder=" provide a link to your resume"
									value={this.state.resume}
									onChange={this.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="github">GitHub</label>
								<input
									type="text"
									className="form-control"
									name="github"
									placeholder=" provide a link to your github"
									value={this.state.github}
									onChange={this.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="portfolio">Portfolio</label>
								<input
									type="text"
									className="form-control"
									name="portfolio"
									placeholder=" provide a link to your portfolio"
									value={this.state.portfolio}
									onChange={this.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="about_me">About Me</label>
								<input
									type="text"
									className="form-control"
									name="about_me"
									placeholder=" tell us about yourself"
									value={this.state.about_me}
									onChange={this.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="city">City</label>
								<input
									type="text"
									className="form-control"
									name="city"
									placeholder=" what city are you from?"
									value={this.state.city}
									onChange={this.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="state">State</label>
								<input
									type="text"
									className="form-control"
									name="state"
									placeholder=" what state are you from?"
									value={this.state.state}
									onChange={this.onChange}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-lg btn-dark btn-block my-5"
							>
								Complete!
							</button>
						</form>
						<br />
						<br />
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
