'use strict';

module.exports = {
  extends: 'lighthouse:default',
  settings: {
    skipAudits: [
      'is-crawlable',
    ],
  },
}
