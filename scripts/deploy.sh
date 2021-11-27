#!/bin/sh
git pull
docker stop questionnaire
docker rm questionnaire
docker rmi questionnaire-img
docker build -t questionnaire-img .
docker run -d --name questionnaire --restart always -p 80:80 questionnaire-img
exit
