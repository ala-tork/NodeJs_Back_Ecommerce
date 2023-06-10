const mongoose = require('mongoose');

const headphones_marque_schema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String
})

module.exports = mongoose.model('HeadphonesMarque', headphones_marque_schema);