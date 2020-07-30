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
	});
	return User;
};
