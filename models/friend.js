module.exports = function (sequelize, DataTypes) {
    var Friend = sequelize.define("Friend", {
        friendId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    Friend.associate = function (models) {
        // 
        // When an Author is deleted, also delete any associated Posts
        Friend.belongsTo(models.User, {
            foreignKey: "userId",
            allowNull: false,
        })
    };

    return Friend;
};