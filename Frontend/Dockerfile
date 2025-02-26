# Dockerfile for the client
FROM node:18

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

EXPOSE 5174

CMD ["npm","run" ,"dev"]

