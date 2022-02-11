# pull official base image
FROM node:12-alpine AS builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
RUN npm install react-scripts -g --silent
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./
RUN NODE_ENV=production npm run build
RUN ls -la ./build

FROM node:12-alpine
RUN npm install serve -g --silent
WORKDIR /app
COPY --from=builder /app/build .

EXPOSE 3000

# start app
CMD ["serve", "-p", "3000", "-s", "."]