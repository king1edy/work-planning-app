FROM node:alpine

ENV NODE_VERSION 13.10.1

WORKDIR /src/app

COPY package*.json ./
RUN yarn install

COPY . .

CMD [ "yarn", "start" ]
