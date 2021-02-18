#!/bin/sh
git pull
docker stop questionnaire
docker rm questionnaire
docker build -t questionnaire-img .
docker run -d --name questionnaire -p 80:80 questionnaire-img
exit