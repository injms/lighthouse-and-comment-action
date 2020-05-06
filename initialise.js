const fs = require('fs')
const argh = require('argh').argv
const generateURLs = require('./modules/generateURLs')

const gitHubEvent = require(argh.github_event_path)

const pullRequestURLPattern = argh.pr_url_pattern
const liveURL = argh.live_url
const paths = JSON.parse(argh.paths).flat()
const pullRequestNumber = gitHubEvent.number

const { text, json } = generateURLs({
    pullRequestURLPattern,
    liveURL,
    paths,
    pullRequestNumber
  })

// List of URLs for lighthouse-batch
fs.writeFileSync('/urls.txt', text)

// List of URLs with a link between live and PR
fs.writeFileSync('/urls.json', json)
