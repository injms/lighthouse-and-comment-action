const fs = require('fs')
const artifact = require('@actions/artifact')

const uploadResultsToArtifact = () => {
  const client = artifact.create()

  const artifactName = 'lighthouse-reports'
  const rootDirectory = '/lighthouse'
  const reports = fs.readdirSync(rootDirectory, { withFileTypes : true })
                    .filter( file => file.isDirectory() === false)
                    .map( file => `${rootDirectory}/${file.name}`)

  client.uploadArtifact(
    artifactName,
    reports,
    rootDirectory,
    {}
  )
    .then( result => {
      return result
    })
    .catch( error => {
      console.error(error)
    })
}

uploadResultsToArtifact()
