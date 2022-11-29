const express = require('express');
const morgan = require('morgan');
const router = express.Router();
const cors = require('cors');

const app = express();
const postsRouter = require('./Routes/posts.js');

const port = process.env.PORT || 3005;

app.use(cors('*'));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use('/api/posts', postsRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = { app };
