//  ES6 imports test
import express from 'express';
import { PORT, NODE_ENV } from './config';
import { getPromise } from './src/controllers/external';
import { version, name } from './package.json';
import { connectMongo } from './src/utils/mongo';
import { corsDisable } from './src/utils/cors';

const app = express();
app.use(express.json());
connectMongo();

// Disable cors in dev
if (NODE_ENV === 'development') {
  corsDisable(app);
}

// kube healthcheck
app.get('/', (req, res) => {
  res.send({
    message: 'ok',
    version: version,
    name: name,
  });
});

app.get('/test', async (req, res) => {
  const r = await getPromise();
  res.status(200).send(r);
});

app.listen(PORT, () => {
  console.log(`App started in ${NODE_ENV} mode on port ${PORT}`);
});

export default app;
