FROM node:8.1.0

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
# RUN npm install nodemon -g
EXPOSE 4002
CMD node_modules/nodemon/bin/nodemon.js src/app.js
