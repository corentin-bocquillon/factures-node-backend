#!/bin/bash

cd /usr/src/app
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
node app.js
