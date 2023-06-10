const mongoose = require('mongoose');

const headphones_schema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    title: String,
    product_image: String,
    price: Number,
    ref: String,
    description: String,
    category: String,
    manufacturer: String,
    rating: Number
})

module.exports = mongoose.model('Headphones', headphones_schema)