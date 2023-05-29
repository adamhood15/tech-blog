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

//Add a comment to a blog post





module.exports = router;