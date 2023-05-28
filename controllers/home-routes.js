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
            blog,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', async (req, res) => {

    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
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
            blog,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

//Route that opens a blog post so that you can comment on it
// router.get('/comment', async (req, res) => {
//     try {
//         const blog = await Blog.findByPk();

//         blog.get({ plain: true });

//         res.render('comment', {
//              blog,
//              loggedIn: req.session.loggedIn
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get('/create', async (req, res) => {
    res.render('create');
});


router.get('/signup', async (req, res) => {

    if (req.session.loggedIn) {
        res.redirect('/');
    };
    res.render('signup');
});

module.exports = router;