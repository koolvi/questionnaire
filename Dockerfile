FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run front:build
RUN npm run api:build

EXPOSE 80
CMD [ "npm", "run", "api:prod" ]