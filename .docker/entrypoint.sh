#!/bin/bash

npm install

npx sequelize-cli db:migrate

npm run start:dev