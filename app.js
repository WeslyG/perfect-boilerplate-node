//  ES6 imports test
import express from 'express';
import { PORT } from './config';
import { getPromise } from './src/external';
import {version, name } from './package.json';

const app = express();

// kube healthcheck
app.get('/', (req, res) => {
  res.send({
    message: 'ok',
    version: version,
    name: name
  });
});

app.get('/test', async (req, res) => {
  const r = await getPromise();
  res.send({ message: r });
});

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
