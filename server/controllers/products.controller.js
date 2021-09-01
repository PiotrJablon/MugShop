const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Product.find());
    } catch (error) {
        res.status(500).json({ message: error });
    }
};