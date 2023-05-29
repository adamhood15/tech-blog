const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');

// localhost:3001/api/blog

//Create new blog post
router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            date: req.body.date,
            title: req.body.title,
            content: req.body.content,
            author_id: req.body.author_id,
        });

        req.session.save(() => {res.status(200).json(newBlog)});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Update a blog post
router.get('/update', async (req, res) => {
    res.render('update');
});

//Delete a blog post

//Displays one blog to comment on
router.get('/:id/comment', async (req, res) => {
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

//Adds a comment to a blog
router.post('/:id/comment', async (req, res) => {
    try {
        const commentData = await Comment.create({
            content: req.body.content,
            date: req.body.date,
            author_id: 2,
            blog_id: req.params.id,
        });

        req.session.save(() => {res.status(200).json(commentData)});
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;