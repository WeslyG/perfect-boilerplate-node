export const corsDisable = app => {
  console.log('App run in DEV mode, disable cors');
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    next();
  });
};
