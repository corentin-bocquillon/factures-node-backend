FROM node:13.6.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If building for production
# RUN npm ci --only=production

# Bundle app source code
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
