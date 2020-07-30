module.exports = function (sequelize, DataTypes) {
    var Friend = sequelize.define("Friend", {
        friendId: {
            type: sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        friend_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    return Friend;
};