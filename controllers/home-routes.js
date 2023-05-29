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

//Route that opens a blog post so that you can comment on it
router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id);

        blog = blogData.get({ plain: true });

        res.render('comment', {
             blog,
             loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {

    if (req.session.loggedIn) {
        res.redirect('/');
    };
    res.render('signup');
});

//Creates new user
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/viewpost', async (req, res) => {
    res.render('viewpost');
});

module.exports = router;