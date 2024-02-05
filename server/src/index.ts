import express from 'express';
import { auth } from './router/auth';
import { connectDb } from './utils/database';

connectDb();

const start = () => {
  const app = express();
  app.use(express.json());

  app.use('/auth', auth);

  app.get('/', (_req, res) => {
    res.send('Hello world');
  });

  const PORT = 8000;

  app.listen(PORT, () => {
    console.log('Server is running');
  });
};

start();
