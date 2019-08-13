# build contaiter
FROM node:12-alpine AS build

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY [ "package.json", "yarn.lock", "webpack.prod.js", "app.js", "/usr/app/"]

# if you have any node-gyp modules
# RUN apk add --no-cache --virtual .build-deps make gcc g++ python \
#     && npm install --silent \
#     && apk del .build-deps

RUN yarn
COPY ./src /usr/app/src/
RUN npm run build

# run contaier
FROM node:12-alpine

ENV NODE_ENV production
RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY --from=build /usr/app/build/bundle.prod.js /usr/app
EXPOSE 3000
CMD [ "node", "bundle.prod.js"]
