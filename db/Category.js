const mongoose = require('mongoose');

const category_schema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    title: String
})

module.exports = mongoose.model('Category', category_schema)