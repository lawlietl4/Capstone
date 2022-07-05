FROM node:latest
WORKDIR /usr/src/app

RUN npm install --location=global nodemon @angular/cli
COPY ./ /usr/src/app/
RUN npm install

COPY . .

# EXPOSE 8080/tcp
CMD [ "npm", "start" ]