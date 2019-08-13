//  Es6 imports test
import express from 'express';
import { getPromise } from './src/external';

const app = express();

app.get('/', async (req, res) => {
  const r = await getPromise();
  res.send({ message: r });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`I am started on port ${process.env.PORT || 3000}`);
});
