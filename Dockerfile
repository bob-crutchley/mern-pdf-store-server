FROM node:10.10-alpine
COPY . /mern-pdf-store-server
WORKDIR /mern-pdf-store-server
ENTRYPOINT node app.js
