const User = require('./user');
const Comment = require('./comment');
const Blog = require('./blog');

User.hasMany(Blog, {
  foreignKey: 'author_id',
});

Blog.belongsTo(User, {
  foreignKey: 'author_id',
});

User.hasMany(Comment, {
    foreignKey: 'author_id',
});

Comment.belongsTo(Blog, {
    foreignKey: 'title',
});
module.exports = { User, Comment, Blog };