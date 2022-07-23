#Dockefile for nodejs app
#layer 1
#define source image (python, dockerhub, apis)
FROM node: 14

LABEL maintainer="Binh Kieu"

#layer2
#copies files to the file system of the image
#copy everything from current dir to 'app' dir on the image
COPY . /app 
#defines the working dir for other commands
WORKDIR /app
COPY package*.json ./
COPY . .

#layer3
#run commands to setup environment for main application in the image
RUN npm install

#layer 4
#define the main executable 'index.js'
CMD [ "node", "server.js" ]