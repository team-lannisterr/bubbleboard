const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./auth-routes');
const profileRoutes = require('./profile-routes');
const passportSetup = require('./passport-setup');
// const keys = require('./keys');
const path = require('path');
const db = require('./models/db');
const auth = require('./auth.js');
const UserInfo = require('./models/UserModel.js');
const app = express();





//.keys file holds API keys, must add from google. 
//also holds database link. slack @jc for more information

// app.use(cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
    // keys: [keys.session.cookieKey]
// }));

app.use(express.static(__dirname + './../'));
app.use(passport.initialize());
app.use(passport.session());

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