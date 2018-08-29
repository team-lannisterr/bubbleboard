const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.send('logged in?');
});

router.get('/logout', (req, res) => {
    res.send('logging out');
});

// auth google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached the callback URI');
})

module.exports = router;