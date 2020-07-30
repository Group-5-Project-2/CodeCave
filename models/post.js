module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        postId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_channel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    });
    return Post;
};