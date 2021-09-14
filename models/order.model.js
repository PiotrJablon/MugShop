const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    street: { type: String },
    number: { type: Number },
    ZIPCode: { type: String, required: true },
    City: { type: String, required: true },
    Email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    products: { type: Array, required: true },
    cost: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);