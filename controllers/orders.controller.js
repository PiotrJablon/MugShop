const Order = require('../models/order.model');

exports.addOne = async (req, res) => {
  try {
    const { firstName, lastName, street, number, ZIPCode, City, Email, phoneNumber, products, cost } = req.body;
    const newOrder = new Order({ firstName, lastName, street, number, ZIPCode, City, Email, phoneNumber, products, cost });
    await newOrder.save();
    res.json({ message: 'OK' });
  } catch(err) {
    res.status(500).json({ message: err });
  }
};