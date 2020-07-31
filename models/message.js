module.exports = function (sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
        messageId: {
            type: sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        message_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message_text: {
            type: DataTypes.STRING,
            allowNull: false,
        }


    });
    Message.associate = function (models) {

        Message.hasOne(models.User, {
            foreignKey: "userId",
            allowNull: false,
        })
    }
    return Message;
};