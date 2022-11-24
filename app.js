const express = require('express');
const morgan = require('morgan');
const router = express.Router();

const app = express();
const postsRouter = require('./Routes/posts.js');

const port = process.env.PORT || 3005;

/* const { query } = require ("./db/index.js");
const testRoute = router.get("/", async function (req, res) {
    const results = await query('SELECT * FROM posts');
    res.json({success:true, payload: results.rows});
    console.log(res);
}) */

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use('/api/posts', postsRouter);
pap.use(cors('*'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
