const url = require('url')

const generateURLs = ({ pullRequestURLPattern, liveURL, paths, pullRequestNumber }) => {
  const pullRequestURL = pullRequestURLPattern.replace(/{{( |)PULL_REQUEST_NUMBER( |)}}/, pullRequestNumber)

  const listOfURLs = []
  const JSONOfURLs = []

  paths.forEach( path => {
    const pr =  new URL(path, pullRequestURL)
    const live =  new URL(path, liveURL)

    listOfURLs.push([
      pr.href,
      live.href,
    ])

    JSONOfURLs.push({
      page: path,
      prURL: pr.href,
      liveURL: live.href,
    })
  })

  return {
    text: listOfURLs.flat().join('\n'),
    json: JSON.stringify(JSONOfURLs),
  }
}

module.exports = generateURLs
