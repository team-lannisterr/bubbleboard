require('dotenv').config();

const mongoose = require('mongoose');
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to database'));

module.exports = db;