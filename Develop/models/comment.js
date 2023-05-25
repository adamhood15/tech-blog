const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blog_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;