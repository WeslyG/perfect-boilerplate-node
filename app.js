//  ES6 imports test
import express from 'express';
import { getPromise } from './src/external';
import { PORT } from './config';

const app = express();

app.get('/', async (req, res) => {
  const r = await getPromise();
  res.send({ message: r });
});

app.listen(PORT, () => {
  console.log(`I am started on port ${PORT}`);
});
