FROM node:14 AS base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build

EXPOSE 7000

CMD ["npm", "start"]