const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

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
            type: DataTypes.DATEONLY,
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

module.exports = Blog;