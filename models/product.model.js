const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    firstImage: { type: String },
    secondImage: { type: String },
    thirdImage: { type: String },
});

module.exports = mongoose.model('Product', productSchema);