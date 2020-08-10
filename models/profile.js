

const Sequelize = require('sequelize')
const db = require('../database/db.js')
const User = require('./user');
const Profile = db.sequelize.define(
    'profile',
    {
        profileId: {
            type: Sequelize.INTEGER(11),

            autoIncrement: true,
            primaryKey: true,
        },
        job_title: {
            type: Sequelize.STRING,

        },
        profile_picture: {
            type: Sequelize.STRING,
        },
        resume: {
            type: Sequelize.STRING,
        },
        github: {
            type: Sequelize.STRING,
        },
        portfolio: {
            type: Sequelize.STRING,
        },
        about_me: {
            type: Sequelize.STRING(300),
        },
        city: {
            type: Sequelize.STRING,
        },
        state: {
            type: Sequelize.STRING,
        },
        // userId: {
        //     type: Sequelize.INTEGER(11),
        //     foreignKey: true,
        // },

        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    },
)
Profile.belongsTo(User, {
    foreignKey: "id"
});

module.exports = Profile;
