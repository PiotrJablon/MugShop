const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const productsRoutes = require('./routes/products.routes');

app.use(express.static(path.join(__dirname, '/client/build')));

const server = app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port: 8000');
});

mongoose.connect('mongodb+srv://Pioter:l4y1SBvycWvRWJUp@cluster0.aseo1.mongodb.net/Mugshop?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', productsRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
  
  app.use((req, res) => {
    res.status(404).json({message: 'Not found...'});
  });