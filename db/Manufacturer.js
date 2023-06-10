const mongoose = require('mongoose');

const manufacturer_schema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String
})

module.exports = mongoose.model('Manufacturer', manufacturer_schema);