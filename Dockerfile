FROM node:4.2.1
EXPOSE 8000
COPY server.js /server.js
CMD npm install
CMD npm start
