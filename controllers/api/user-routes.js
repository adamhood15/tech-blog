const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');

// localhost:3001/api/user

//Create new user
router.post('/', async (req, res) => {
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
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/create', async (req, res) => {
    res.render('create');
});

module.exports = router;