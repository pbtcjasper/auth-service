FROM node:4.2.1
MAINTAINER jasper@poweredbythecrowd.nl
# set default workdir
WORKDIR /usr/src
# Add package.json to allow for caching
COPY package.json /usr/src/package.json
# Install app dependencies
RUN npm install forever
RUN npm install
# Bundle app source and tests
COPY app.js /usr/src/
COPY server.js /usr/src/
COPY logging.js /usr/src/
COPY config /usr/src/config
COPY logs /usr/src/logs
COPY routes /usr/src/routes
COPY test /usr/src/test
# user to non-privileged user
USER nobody
# Expose the application port and run application
EXPOSE 8000
CMD ["npm", "run", "docker-start"]
