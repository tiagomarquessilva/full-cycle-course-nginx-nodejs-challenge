FROM node:16-alpine

WORKDIR /app

COPY ./src /app/

RUN apk update && apk --no-cache add curl
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
