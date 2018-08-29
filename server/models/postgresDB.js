// console.log(`why can't i fucking connect`)
require('dotenv').config();

// const pg = require('pg');

// const pgClient = new pg.Client(process.env.POSTGRES_URL);
// console.log('HELO??');
// console.log('wtf..');
// pgClient.connect(function(err) {
//   if(err) return console.error(err);

//   pgClient.query('SELECT * FROM user_info', (err, result) => {
//     return console.log('the fucking result', result);
//   })
//   console.log('connected to pg!');
// })


var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

// var conString = "INSERT_YOUR_POSTGRES_URL_HERE" //Can be found in the Details page
// var client = new pg.Client(process.env.POSGRES_URL);
pg.connect(process.env.POSGRES_URL, function(err, db) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  db.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});