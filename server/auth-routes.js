const router = require('express').Router();
const passport = require('passport');

// route login
router.get('/login', (req, res) => {
    res.send(`i'm here`);
});
// route logout
router.get('/logout', (req, res) => {
    res.send('pz');
})

// auth with google
// google strategy being passed down from passport-setup
// when passport.use is used.
// .authenticate 'google' and extract profile info to use
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// successfully getting message back from google after signing in
router.get('/google/redirect', 
    passport.authenticate('google'), 
    (req, res) => {
        res.send('you reached the callback uri');
    })
// router.get('/google', passport.authenticate('google', {
//     scope: ['profile']
// }));

// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//     // res.send(req.user);
//     res.redirect('/profile');
// });

// router.get('/logout', (req, res) => {
// //   req.logout();
//   res.send('bye')
//   // res.redirect('/');
// });

module.exports = router;
