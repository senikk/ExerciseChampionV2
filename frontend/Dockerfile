FROM node:latest
WORKDIR /usr/src/app
COPY rehearsal rehearsal
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 8081
CMD ["yarn", "start"]