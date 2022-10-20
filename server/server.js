const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3001
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.static(path.join(__dirname, '../client/build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, ()=> {
  console.log(`Server is listening on ${PORT}`)

})