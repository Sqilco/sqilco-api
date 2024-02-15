FROM node:latest

WORKDIR /sqilco-api

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3008

CMD [ "npm", "run","start", "app.js" ]
