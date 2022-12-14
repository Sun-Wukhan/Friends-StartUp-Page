# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install react-scripts@3.4.1 -g --silent



# add app
COPY . ./
RUN npm install react-scripts@4.0.3 -g --silent
RUN npm install n -g

# start app
CMD ["gatsby", "develop"]