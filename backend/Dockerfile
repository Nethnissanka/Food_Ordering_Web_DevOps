# Use an official Node.js image
# Dockerfile for the API service
FROM node:18

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm","run" ,"start"]
