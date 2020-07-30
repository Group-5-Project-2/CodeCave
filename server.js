const express = require("express");
const app = express();
const session = require("express-session");
// Requiring passport for login password protection
const passport = require("./config/passport");
const PORT = process.env.PORT || 3001;
const routes = require("./controllers");
const db = require("./models");
const environment = process.env.NODE_ENV || "development";



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
console.log(process.env.NODE_ENV);
// change to production from development on line 8 to go live
if (environment === "production") {
	app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Add routes, both API and view
app.use(routes);

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});
