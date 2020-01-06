# develop stage
FROM node:lts as develop-stage
WORKDIR /app
COPY . .
RUN yarn install

