FROM node:16.13.1-alpine3.12

RUN apk add --no-cache bash git

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@8.0.0

USER node

EXPOSE 3000

WORKDIR /home/node/app