import mongoUnit from 'mongo-unit';
import { MONGO_URL } from '../config';

mongoUnit.start({
  dbName: 'testDb',
  port: MONGO_URL.split(':')[1]
})
  .then(() => {
    let mongoUrl = mongoUnit.getUrl().match(/(mongodb:\/\/)(.*)\//)[2];
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
