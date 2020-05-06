const pc2dp = require('./pc2dp')
const capitalise = require('./capitalise')

Number.prototype.pc2dp = pc2dp
String.prototype.capitalise = capitalise

const joinSummaryAndURLs = ({ urls, summary: summaries }) => {
  return urls.map( ({page, prURL, liveURL }) => {
    const prSummary = summaries.filter( summary => {
      return summary.url === prURL
    })[0]

    const liveSummary = summaries.filter( summary => {
      return summary.url === liveURL
    })[0]

    return {
      page,
      liveSummary,
      prSummary,
    }
  })
}

const createTable = ({page, prSummary, liveSummary}) => {
  const {detail: liveDetails} = liveSummary
  const {detail: prDetails} = prSummary

  const table = [
    `### Page - \`${page}\``,
    '',
    `| Category | [Live](${liveSummary.url}) | [Pull request](${prSummary.url}) | Difference |`,
    '|-|-|-|-|',
  ]

  for (let key in liveDetails) {
    if (liveDetails.hasOwnProperty(key) && prDetails.hasOwnProperty(key)) {
      const liveScore = liveDetails[key].pc2dp()
      const prScore = prDetails[key].pc2dp()
      const difference = (prScore - liveScore)
      const symbol = difference < 0 ? "❌" : "✅"
      const pn = difference > 0 ? "+" : ""

      table.push(`| ${key.capitalise()} | ${liveScore} | ${prScore} | ${symbol} ${pn}${difference} |`)
    }
  }

  return table.join('\n')
}

const generateComment = ({ urls, summary }) => {
  return joinSummaryAndURLs({ urls, summary })
          .map( report => createTable(report))
          .join('\n\n---\n\n')
}

module.exports = generateComment
