require('dotenv').config();

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
// const expressSession = require('express-session');
const keys = require('./keys');
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

console.log('HELLO?');
passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  }, function() {
    // passport callback
    // accessToken => from google
    console.log('passport callback firebacked');
    // console.log(profile);
  }
))

