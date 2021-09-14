const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const productsRoutes = require('./routes/products.routes');
const ordersRoutes = require('./routes/orders.routes.js');

app.use(express.static(path.join(__dirname, '/client/build')));

const server = app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port: 8000');
});

mongoose.connect('mongodb+srv://Pioter:l4y1SBvycWvRWJUp@cluster0.aseo1.mongodb.net/Mugshop?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', productsRoutes);
app.use('/api', ordersRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
  
  app.use((req, res) => {
    res.status(404).json({message: 'Not found...'});
  });