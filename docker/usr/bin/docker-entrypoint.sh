#!/bin/bash

cd /usr/src/app

# Run migrations
npx sequelize-cli db:migrate

# Add seeds
npx sequelize-cli db:seed:all

# Run app
node app.js
