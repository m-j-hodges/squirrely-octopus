const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3001
const app = express();
const path = require('path')
const routes = require('./routes')
const cors = require("cors");



const db = require('./connection/config');
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, './public')));

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, UPDATE, PATCH');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  })
});