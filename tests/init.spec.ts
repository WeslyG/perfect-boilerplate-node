import mongoUnit from 'mongo-unit';
import { MONGO_URL } from '../config';

const MONGO_PORT: number = parseInt(MONGO_URL.split(':')[1]);

mongoUnit
  .start({
    dbName: 'testDb',
    port: MONGO_PORT,
  })
  .then(() => {
    const mongoUrl: string = mongoUnit.getUrl();
    console.log(`Fake mongo is started: ${mongoUrl}`);
    run();
    return null;
  })
  .catch(err => {
    throw err;
  });

after(() => {
  console.log('Stop database');
  return mongoUnit.stop();
});
