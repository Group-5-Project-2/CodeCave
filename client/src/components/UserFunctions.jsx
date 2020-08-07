import axios from "axios";

export const register = (newUser) => {
	return axios
		.post("users/register", {
			first_name: newUser.first_name,
			last_name: newUser.last_name,
			user_name: newUser.user_name,
			email: newUser.email,
			password: newUser.password,
		})
		.then((response) => {
			console.log("Registered");
		})
		.catch((err) => {
			console.log(err);
		});
};

export const login = (user) => {
	return axios
		.post("users/login", {
			email: user.email,
			password: user.password,
		})
		.then((response) => {
			localStorage.setItem("usertoken", response.data);
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const profile = (newProfile) => {
	return axios
		.post("profiles/profilePage", {
			job_title: newProfile.job_title,
			profile_picture: newProfile.profile_picture,
			resume: newProfile.resume,
			github: newProfile.github,
			portfolio: newProfile.portfolio,
			about_me: newProfile.about_me,
			city: newProfile.city,
			state: newProfile.state,
			userId: newProfile.userId,
		})
		.then((response) => {
			console.log("profile");
		})
		.catch((err) => {
			console.log(err);
		});
};
