const { Comment } = require('../models');

const commentData = [
    {
        author_id: '1',
        blog_id: '3',
        content: 'I really hate you',
        date: '5/25/2023',
    },
    {
        author_id: '2',
        blog_id: '1',
        content: 'Great blog post!',
        date: '5/25/2023',
    },  
    {
        author_id: '3',
        blog_id: '2',
        content: 'I really love this website soooo much.',
        date: '5/25/2023',

    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;