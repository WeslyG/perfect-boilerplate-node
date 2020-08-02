import mongoUnit from 'mongo-unit';

mongoUnit.start({
  dbName: 'testDb',
  port: process.env.MONGO_URL.split(':')[1]
})
  .then(() => {
    let mongo_url = mongoUnit.getUrl().match(/(mongodb:\/\/)(.*)\//)[2];
    console.log(`Fake mongo is started: ${mongo_url}`);
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
