import React, { Component } from "react";

export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			values: {
				email: "",
				password: "",
			},
			isSubmitting: false,
			isError: false,
		};
	}
	render() {
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<div className="input-group">
						<label htmlFor="email">E-mail Address</label>
						<input
							type="email"
							name="email"
							id="email"
							value={this.state.values.email}
							onChange={this.handleInputChange}
							title="Email"
							required
						/>
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							value={this.state.values.password}
							onChange={this.handleInputChange}
							title="password"
							required
						/>
					</div>
					<button type="submit">Sign In</button>
				</form>
			</div>
		);
	}
	handleInputChange = (e) =>
		this.setState({
			values: { ...this.state.values, [e.target.name]: e.target.value },
		});
	submitForm = (e) => {
		e.preventDefault();
		this.setState({ isSubmitting: true });

		let response = fetch("/api/signup");

		if (response.ok) {
			console.log(this.state.values);
		} else {
			alert("HTTP ERROR : " + response.status);
		}

		// 	fetch("/api", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify(this.state.values),
		// 	})
		// 		.then((res) => {
		// 			this.setState({ isSubmitting: false });
		// 			return res.json();
		// 		})
		// 		.then((data) => {
		// 			console.log(data);
		// 			!data.hasOwnProperty("error")
		// 				? this.setState({ message: data.success })
		// 				: this.setState({ message: data.error, isError: true });
		// 		});
		// };
	};
}
