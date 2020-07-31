const express = require("express");
const session = require("express-session");
// Requiring passport for login password protection
const passport = require("./config/passport");
// PORT
const PORT = process.env.PORT || 3001;
// Models
const db = require("./models");
// naming express function
const app = express();
// express 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
console.log(process.env.NODE_ENV);
const environment = process.env.NODE_ENV || "development";
if (environment === "production") {
	app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
const routes = require("./controllers");
app.use(routes);

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});
