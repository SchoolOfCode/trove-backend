import express from 'express';
import morgan from 'morgan';
// import router from express.Router();
import cors from 'cors';

export const app = express();
import postsRouter from './Routes/posts.js';


app.use(cors('*'));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use('/api/posts', postsRouter);