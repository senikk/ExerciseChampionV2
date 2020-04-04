FROM node:latest
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 9090
CMD ["yarn", "start"]