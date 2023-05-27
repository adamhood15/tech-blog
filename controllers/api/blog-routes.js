const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');

router.get('/comment', async (req, res) => {
    res.render('comment');
});

router.get('/update', async (req, res) => {
    res.render('update');
});

router.get('/viewpost', async (req, res) => {
    res.render('viewpost');
});

module.exports = router;