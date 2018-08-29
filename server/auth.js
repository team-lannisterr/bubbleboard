// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// const passport = require('passport');
// const expressSession = require('express-session');
// const db = require('./models/db.js');

// // a way of storing certain data from the user data object to the session (store into a cookie)
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// // a way of using the piece of data that has been obtained from the serialization, to 
// // identify which user to retrieve the information from
// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// passport.use(new GoogleStrategy({
//     callbackURL: '/auth/google/redirect',
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET 
//   }, 
//   (token, refreshToken, profile, done) => {
//     // passport callback
//     return done(null, {
//       profile: profile,
//       token: token
//     })
//   }
// ))

