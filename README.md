# Perfect template for start your nodejs backend server (api)

#### Last Update 2020.03
webpack -  4.42.0

express - 4.17.1

@babel/* - 7.8.6 (no @babel/polyfill)

eslint - 6.8.0

### This repo include

- Nodejs 10+/12
- es6 import + all es6 runtime support (corejs:3)
- Webpack 4
  - Webpack liveReload config for dev (include source map)
  - Webpack production ready config
- Docker for build and production
  - onbuild container (on alpine include node-gyp modules if you need)
  - all build in docker
  - Not need node/webpack and other on your CI agents
- package.json and yarn.lock for dep
- simple and lightweight (1 main dep express)

### How to use?

- clone this repo
- rm -rf .git
- git rm --cached .env
- add .env to .gitignore
- nvm use
- change data in package.json (dockerlogin, version etc)
- change any source in app.js or ./src
- Run ```npm start``` for dev run on localhost:3000
- Run ```npm run build``` for production build in distr dir
- for docker production build run this:
  - build your app - ```docker build -t myLoveapp .```
  - run your app in docker ```docker run -d -p $PORT:$PORT myLoveapp```

### TODO

- [x] Support Promices and await
- [ ] Docs add postman and swagger
- [x] Config in files for local development and Env for docker
- [x] Eslint
- [x] Nvm support and node support in package.json
- [ ] Debug enabled in vscode (connect to process)

### Optional TODO

- [ ] Metrics to graphite
- [ ] Logs to Elasticsearch
- [ ] Wrap to cli
