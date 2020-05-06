# TODO: install Chrome myself.
FROM jakejarvis/chrome-headless:latest

LABEL homepage="https://inj.ms/lighthouse-and-comment"
LABEL maintainer="Ian James <hi@inj.ms>"

COPY package.json /package.json
COPY package-lock.json /package-lock.json

RUN npm ci
