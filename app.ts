import express, { Response, Express } from 'express';
import { PORT, NODE_ENV } from './config';
import { getPromise } from './src/controllers/external';
import { version, name } from './package.json';
import { connectMongo } from './src/utils/mongo';
import { corsDisable } from './src/utils/cors';
import { IAnswerModel } from './src/interfaces/AnswerModel';

const app: Express = express();
app.use(express.json());
connectMongo();

// Disable cors in dev
if (NODE_ENV === 'development') {
  corsDisable(app);
}

// k8s healthcheck
app.get('/', (_, res: Response<{ message: string, name: string, version: string }>) => {
  res.send({
    message: 'ok',
    name,
    version,
  });
});

app.get('/test', async (_, res: Response<IAnswerModel>) => {
  const r = await getPromise();
  res.status(200).send(r);
});

app.listen(PORT, () => console.log(`App started in ${NODE_ENV} mode on port ${PORT}`));

export default app;
