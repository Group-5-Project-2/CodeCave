module.exports = function (sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        profileId: {
            type: sequelize.INTEGER(11),
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
        }

    }
    );
    return Profile;
};