FROM node:14.16.0

WORKDIR /app

COPY package*.json ./


RUN npm i -g




FROM bash:5.0


COPY . .


CMD ["bash", "bin.sh"]
