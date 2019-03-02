# Perfect template for start your nodejs backend server (api)

#### Last Update 2019.02
webpack -  4.29.6

express - 4.16.4

@babel/core - 7.3.4

@babel/preset-env - 7.3.4

### This repo include

- Nodejs 10+
- Webpack 4
  - Webpack liveReload config for dev (include source map)
  - Webpack production ready config
- Docker for build and production
  - onbuild container (on alpine include node-gyp modules)
  - all build in docker
  - Not need node/webpack/any other app on your CI agents
- Debug enabled in vscode (connect to process)
- npm-shrinkwrap and yarn.lock for dep
- simple and lightweight (8 dep only)

### How to use? 

- clone this repo
- change any source in app.js or ./src
- ???
- Run ```npm start``` for dev run on localhost:3000
- Run ```npm run build``` for production build in distr dir
- for docker production build run this:
  - build your app - ```docker build -t myloveapp .```
  - push your docker in registry ```docker push myloveapp:latest```

### TODO

- Docs add postman and swagger
- Config in files for local development and Env for docker
- Eslint
- Metrics to graphite
- Logs to Elasticsearch
- wrap to cli
