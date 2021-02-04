const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

app.use('./post', feedRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Running on port 8000...')
})