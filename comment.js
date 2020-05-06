const argh = require('argh').argv

const generateComment = require('./modules/generateComment')
const postComment = require('./modules/postComment')

const urls = require('/urls.json')
const summary = require('/lighthouse/summary.json')
const gitHubEvent = require(argh.github_event_path)

const [ owner, repo ] = argh.repo.split('/')
const pullRequestNumber = gitHubEvent.number

const commentText = generateComment({ urls, summary,})

postComment({ owner, repo, pullRequestNumber, commentText })
