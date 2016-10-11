FROM node:latest

MAINTAINER Steven Schmatz <stevenschmatz@gmail.com>

# Create app directory
RUN mkdir -p /app/src
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install -s --production

# Bundle app source
COPY src /app/src

# Default port: 8000
EXPOSE 8000

# Create build directory
RUN mkdir -p /app/build
COPY .babelrc .babelrc
RUN /app/node_modules/.bin/babel src --out-dir /app/build

CMD ["npm", "start"]
