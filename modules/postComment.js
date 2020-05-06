const github = require('@actions/github')
const core = require('@actions/core')

const postComment = ({ owner, repo, pullRequestNumber, commentText }) => {

  const githubToken = core.getInput('github_token')
  const octokit = new github.GitHub(githubToken)

  try {
    octokit.issues.createComment({
      owner,
      repo,
      issue_number: pullRequestNumber,
      body: commentText,
    })

    return true
  }
  catch (error) {
    console.error(error)
    return error
  }
}

module.exports = postComment
