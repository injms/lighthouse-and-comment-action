// Percentage with up to two decimal places

const pc2dp = function() {
  return Math.round(this * 10000) / 100
}

module.exports = pc2dp
