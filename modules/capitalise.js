const capitalise = function() {
  return this
          .replace(/-/g, ' ')
          .replace('pwa', 'Progressive web app')
          .replace('seo', '<acronym title="Search engine optimisation">SEO</acronym>')
          .replace(/^\w/, function(s) {
            return s.toUpperCase()
          })
}

module.exports = capitalise
