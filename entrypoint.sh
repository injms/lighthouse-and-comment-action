#!/bin/bash

if [ ! "$GITHUB_EVENT_NAME" == "pull_request" ] ; then
  echo ""
  echo "-------------------------------------------------------"
  echo "| ! This action should only be run on pull requests   |"
  echo "-------------------------------------------------------"
  echo ""
  exit 1
fi

node /initialise.js --paths $INPUT_PAGES --pr_url_pattern $INPUT_PR_URL_PATTERN --live_url $INPUT_LIVE_URL --github_event_path $GITHUB_EVENT_PATH

npx lighthouse-batch --file "/urls.txt" --out "/lighthouse" --html

node /comment.js --repo $GITHUB_REPOSITORY --github_event_path $GITHUB_EVENT_PATH
