# TODO: install Chrome myself.
FROM jakejarvis/chrome-headless:latest

LABEL homepage="https://inj.ms/lighthouse-and-comment"
LABEL maintainer="Ian James <hi@inj.ms>"

COPY package.json /package.json
COPY package-lock.json /package-lock.json

COPY modules/ /modules/

COPY initialise.js /initialise.js
COPY comment.js /comment.js
COPY upload-results-to-artifact.js /upload-results-to-artifact.js

COPY entrypoint.sh /entrypoint.sh

COPY lighthouseConfig.js /lighthouseConfig.js

RUN npm ci

ENTRYPOINT ["/entrypoint.sh"]
