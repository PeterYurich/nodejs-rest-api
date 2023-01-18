FROM node

# рабочая папка с путем относительно Dockrefile
WORKDIR /node-rest-api

# скопировать файлы проекта из (места где лежит Dockerfile) в (папку, которую указали) 
COPY . .

# установить модули
RUN npm install --production

# внутренний порт
EXPOSE 3000

# команда запуска проекта
CMD ["node", "/node-rest-api/server.js"]
