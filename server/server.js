require('dotenv').config();

const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./auth-routes');
const profileRoutes = require('./profile-routes');
// const keys = require('./keys');
const passportSetup = require('./passport-setup');
const path = require('path');
const db = require('./models/db');
const auth = require('./auth.js');
const UserInfo = require('./models/UserModel.js');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./keys');
const app = express();

//.keys file holds API keys, must add from google. 
//also holds database link. slack @jc for more information

// app.use(cookieSession({
    //     maxAge: 24 * 60 * 60 * 1000,
    // keys: [keys.session.cookieKey]
    // }));
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.MY_COOKIE]
}))
app.use(passport.initialize());
app.use(passport.session());

// this user.id is from the database user's id
// stuff this user.id to a cookie
/* the null is to handle any errors */
// this sends off to the cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
})
// this grabs the id from the cookie
passport.deserializeUser((id, done) => {
    UserInfo.findById(id)
        .then((user) => {
            done(null, user.id)
        })
})

passport.use(new GoogleStrategy({
    callbackURL: 'http://localhost:3000/auth/google/redirect',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  }, (accessToken, refreshToken, profile, done) => {
        // check if user exists in db
        UserInfo.findOne({googleId: profile.id})
          .then(currUser => {
              if(currUser) {
                  // already have user
                  console.log('user is ', currUser);
                  // this done cb goes to the serializeUser
                  done(null, currUser);
              }else {
                  // if not, create user in db
                  new UserInfo({
                    username: profile.displayName,
                    googleId: profile.id
                  }).save()
                  .then(newUser => {
                      console.log('newuser created');
                      done(null, newUser);
                  })
              }
          })

        
        done(null, profile);
    })
)
    
app.use(express.static(__dirname + './../'));
app.use('/auth', authRoutes);


app.use('/profile', profileRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.get('/data', (req, res) => {
    UserInfo.find({}, ((err, items) => {
        if(err) return res.status(500).send(err);

        res.status(200).send(items);
    }))
})

app.post('/postData', (req, res) => {
    const dummy = new UserInfo({
        username: "fuck",
        password: "shit",
        obj: "{harro: world}"
    })
    dummy.save();
    res.send(dummy);
})

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});