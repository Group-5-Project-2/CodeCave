module.exports = function (sequelize, DataTypes) {
    var Channel = sequelize.define("Channel", {
        channelId: {
            type: sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        channel_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });
    return Channel;
};