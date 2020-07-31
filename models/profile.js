const user = require("./user");

module.exports = function (sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        profileId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profile_picture: {
            type: DataTypes.BLOB,
        },
        resume: {
            type: DataTypes.BLOB,
        },
        github: {
            type: DataTypes.STRING,
        },
        portfolio: {
            type: DataTypes.STRING,
        },
        about_me: {
            type: DataTypes.STRING(300),
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    })
    // Profile.hasOne(user, {
    //     foreignKey: 'userId'
    // });
    // user.belongsTo(profile);
    // );
    Profile.associate = function (models) {
        // 
        // When an Author is deleted, also delete any associated Posts
        Profile.hasOne(models.User, {
            foreignKey: "userId",
            allowNull: false,
        })
    };
    return Profile;
};