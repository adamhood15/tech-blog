const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/comment', async (req, res) => {
    res.render('comment');
});

router.get('/update', async (req, res) => {
    res.render('update');
});

router.get('/create', async (req, res) => {
    res.render('create');
});

router.get('/viewpost', async (req, res) => {
    res.render('viewpost');
});
module.exports = router;