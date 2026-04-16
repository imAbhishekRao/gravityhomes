## using node as a builder to generate build artifacts 
FROM node:lts-alpine  AS  builder 

RUN apk add --no-cache tzdata
ENV TZ=Asia/Kolkata

USER node

RUN mkdir -p /home/node/app
RUN chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package-lock.json package.json /home/node/app/
RUN npm install 

COPY --chown=node:node . .

RUN npm run build 


EXPOSE 4000

#Useless line ahead
RUN date

ENTRYPOINT [ "sh", "-c", "npm start" ]
