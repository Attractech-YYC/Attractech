#layer 1
#define source image (python, dockerhub, apis)
FROM python:3.7.2-slim

LABEL maintainer="Binh Kieu"

#layer2
#copies files to the file system of the image
#copy everything from current dir to 'app' dir on the image
COPY . /app 
#defines the working dir for other commands
WORKDIR /app
COPY requirements.txt requirements.txt
COPY . .

#layer3
#run commands to setup environment for main application in the image
RUN pip install -r requirements.txt

#layer 4
#define the main executable 'python app.py'
ENTRYPOINT ["python","-m","django","run", "--host=0.0.0.0"]