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
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                const rawDate = this.getDataValue('date');
                const formattedDate = new Date(rawDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                });
                return formattedDate;
            }
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
    
            references: {
                model: 'user',
                key: 'id',
            }
        },
        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
    
            references: {
                model: 'blog',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'comment',
    }
);

module.exports = Comment;