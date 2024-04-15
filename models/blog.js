const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');
const Comment = require('./comment');

class Blog extends Model {}

Blog.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            index: true,
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
            },
        },    
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
    
            references: {
                model: 'user',
                key: 'id',
            }
        },
       
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'blog',
    }
);

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
});
Comment.belongsTo(Blog);

module.exports = Blog;