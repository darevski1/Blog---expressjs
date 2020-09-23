var mongoose = require('mongoose');


// create db connection


// check if db is connected

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connestion error'));
db.once('open', function () {
    console.log('Connected succesfull');
})

module.exports = mongoose;
