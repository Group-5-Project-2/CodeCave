module.exports = function (sequelize, DataTypes) {
    var Education = sequelize.define("Education", {
        educationId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        bootcamp: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        bootcamp_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bootcamp_course: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bootcamp_city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bootcamp_state: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        }
    });
    return Education;
};