const { Blog } = require('../models');

const blogData = [
    {
        author_id: 1,
        date: '5/25/2023',
        title: 'HTML',
        content: 'I really love HTML',
    },
    {
        author_id: 2,
        date: '5/25/2023',
        title: 'CSS',
        content: 'I really love CSS',
    },  
    {
        author_id: 3,
        date: '5/25/2023',
        title: 'JavaScript',
        content: 'I really love JavaScript',

    },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;