# Perfect template for start your nodejs backend server (api)

#### Last Update 2019.08
webpack -  4.39.1

express - 4.16.4

@babel/* - 7.5.5 (no @babel/polyfill)

### This repo include

- Nodejs 10+/12
- es6 import + all es6 runtime support (corejs:3)
- Webpack 4
  - Webpack liveReload config for dev (include source map)
  - Webpack production ready config
- Docker for build and production
  - onbuild container (on alpine include node-gyp modules)
  - all build in docker
  - Not need node/webpack/any other app on your CI agents
- Debug enabled in vscode (connect to process)
- npm-shrinkwrap and yarn.lock for dep
- simple and lightweight (9 dep only)

### How to use?

- clone this repo
- change any source in app.js or ./src
- ???
- Run ```npm start``` for dev run on localhost:3000
- Run ```npm run build``` for production build in distr dir
- for docker production build run this:
  - build your app - ```docker build -t myLoveapp .```
  - push your docker in registry ```docker push myLoveapp:latest```

### TODO

- [x] Support Promices and await
- [ ] Docs add postman and swagger
- [ ] Config in files for local development and Env for docker
- [ ] Eslint
- [ ] Metrics to graphite
- [ ] Logs to Elasticsearch
- [ ] Wrap to cli
