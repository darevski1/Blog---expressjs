const mongoose = require('mongoose');

// create db model posts 

const schema = new mongoose.Schema({
    title: "string",
    body: "string",
    category: "string",
    date: "string"
});
module.exports = mongoose.model('Post', schema)