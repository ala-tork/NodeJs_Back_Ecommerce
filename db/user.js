const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
    id: String,
    name: String,
    username: String,
    password: String
})

module.exports = mongoose.model('User', user_schema)