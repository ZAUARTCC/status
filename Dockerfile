FROM node:alpine

COPY . .

RUN npm install --prod

CMD npm start