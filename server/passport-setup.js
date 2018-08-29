require('dotenv').config();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');


passport.use(new GoogleStrategy({
    // options for the google strat
    callbackURL: '/auth/google/redirect',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  }), () => {
    // passport callback function
    res.send('work?');
  }
)