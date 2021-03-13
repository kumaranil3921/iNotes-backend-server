require('dotenv').config()
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')

const database = require('./database');
const { authenticateToken, generateAccessToken } = require('./services/authService');
const notes = require('./modules/notes');

swaggerDocument = require('./swagger.json');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(authenticateToken);

if (process.env.NODE_ENV === 'production') {
  swaggerDocument.host = process.env.HOST_URL;
}

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Welcome To iNote Server');
});
// TODO: temp route to generateAccessToken
app.get('/token', (req, res) => {
  const token = generateAccessToken({ username: 'dummy' });
  res.send({ token: token });
});

app.use('/notes', notes);

database.connect().then((data) => {
  if (!data.connected) {
    process.exit();
  }
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});

