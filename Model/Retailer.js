const mongoose = require('mongoose');

const retailer_schema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String
});

module.exports = mongoose.model('Retailer', retailer_schema)