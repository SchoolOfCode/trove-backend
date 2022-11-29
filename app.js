import express from 'express';
import morgan from 'morgan';
// import router from express.Router();
import cors from 'cors';

export const app = express();
import postsRouter from './Routes/posts.js';

const port = process.env.PORT || 3005;

app.use(cors('*'));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use('/api/posts', postsRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
