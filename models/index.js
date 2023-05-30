const User = require('./user');
const Comment = require('./comment');
const Blog = require('./blog');

User.hasMany(Blog, {
  foreignKey: 'author_id',
});

User.hasMany(Comment, {
  foreignKey: 'author_id',
});

Blog.belongsTo(User, {
  foreignKey: 'author_id',
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
});

Comment.belongsTo(User, {
  foreignKey: 'author_id',
});


module.exports = { User, Comment, Blog };