FROM node:20

WORKDIR /app

COPY package*  .

RUN npm install


COPY . .

EXPOSE 5000

CMD [ "node","src/server.js" ]