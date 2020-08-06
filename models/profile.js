

const Sequelize = require('sequelize')
const db = require('../database/db.js')
module.exports = db.sequelize.define(
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
            type: Sequelize.BLOB,
        },
        resume: {
            type: Sequelize.BLOB,
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
        userId: {
            type: Sequelize.INTEGER(11),
            foreignKey: true,
        },

        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    },
)
// Profile.associate = function (models) {
//     Profile.belongsTo(models.User, {
//         foreignKey: "userId",

//     })
// };
