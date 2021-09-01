"use strict";

var express = require('express');

var path = require('path');

var cors = require('cors');

var mongoose = require('mongoose');

var app = express();

var productsRoutes = require('./routes/products.routes');

app.use(express["static"](path.join(__dirname, '/client/build')));
var server = app.listen(process.env.PORT || 8000, function () {
  console.log('Server is running on port: 8000');
});
mongoose.connect('mongodb+srv://Pioter:l4y1SBvycWvRWJUp@cluster0.aseo1.mongodb.net/Mugshop?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
app.use(cors());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use('/api', productsRoutes);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
app.use(function (req, res) {
  res.status(404).json({
    message: 'Not found...'
  });
});