const bcrypt = require("bcryptjs");


module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define("User", {
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notNull: {
					msg: "User name required",
				},
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: {
					msg: "Valid email address required",
				},
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		  }
	});

	// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
	User.prototype.validPassword = function(password) {
		return bcrypt.compareSync(password, this.password);
	};
	// Hooks are automatic methods that run during various phases of the User Model lifecycle
	// In this case, before a User is created, we will automatically hash their password
	User.addHook("beforeCreate", function(user) {
		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
	});

	return User;
};
