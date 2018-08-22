FROM node:8.9.1
WORKDIR /sabjidukan
COPY package.json /app
RUN npm install
COPY ./sabjidukan
CMD node node1.js
EXPOSE 8081
