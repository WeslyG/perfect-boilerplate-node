import express from 'express';
import a from './src/external'

const app = express();

app.get('/', (req, res) => {
  res.send({ message: a.number});
});

app.listen(3000, () => {
  console.log('I am started on port 3000');
});