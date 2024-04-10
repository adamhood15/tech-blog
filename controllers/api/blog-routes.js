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
            author_id: req.session.user_id,
        });

        req.session.save(() => {res.status(200).json(newBlog)});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Grabs selected blog post to update or delete
router.get('/:id/update', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id);
        blog = blogData.get({ plain: true });

        res.render('update', {
            blog,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Updates selected blog post
router.put('/:id', async (req, res) => {
    try {
        const blogData = await Blog.update(
            {
                title: req.body.title,
                content: req.body.content,
                author_id: req.session.user_id,
                date: req.body.date,
            },
            {
            where: {
                id: req.params.id
            }},
            );
        
        res.render('dashboard');
        res.status(200).json(blogData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Delete a blog post
router.delete('/:id', async (req, res) => {
    try {
      const projectData = await Blog.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Displays one blog to comment on
router.get('/:id/comment', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['username']  
            }], 
        });
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
            author_id: req.session.user_id,
            blog_id: req.params.id,
        });
        console.log(req.params.id);
        req.session.save(() => {res.redirect('/blob/${req.params.id}/comment')});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;