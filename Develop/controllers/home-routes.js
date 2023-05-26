const router = require('express').Router();
const { Blog, Comment, User } = require('../models');

//Displays all blog posts in the database to the homepage
router.get('/', async (req, res) => {
    try {
        const dbBlogData = await Blog.findAll();

        const blog = dbBlogData.map((blog) => 
        blog.get({ plain: true })
        );

        res.render('homepage', {
            blog
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', async (req, res) => {
    res.render('login');
});

//Pull all my posts in my dashboard page
router.get('/dashboard', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                author_id: 2
            }
        });

        const blog = blogData.map((blog) => 
        blog.get({ plain: true })
        );

        res.render('dashboard', {
            blog
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;