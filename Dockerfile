FROM node:alpine

COPY ./dist ./
COPY package.json .

RUN npm install --prod

CMD node app.js