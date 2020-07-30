module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        jobId: {
            type: sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        current_jobtitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        current_job: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        current_jobcity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        current_jobstate: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    return Job;
};