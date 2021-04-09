FROM node:14.8.0-alpine3.12

RUN apk add --no-cache bash


RUN npm install -g @nestjs/cli@7.5.6
COPY . /home/node/app


WORKDIR /home/node/app
