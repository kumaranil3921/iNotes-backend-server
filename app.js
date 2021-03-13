require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const database = require('./database');
const notes = require('./modules/notes');
const PORT = process.env.PORT || 4000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome To iNote Server');
})
app.use('/notes', notes);
database.connect().then((data) => {
  if (!data.connected) {
    process.exit();
  }
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});

