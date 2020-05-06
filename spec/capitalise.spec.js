describe('Capitalise protoype extension', function() {
  beforeAll( function() {
    String.prototype.capitalise = require('../modules/capitalise')
  })

  it('replaces a dash with a space', function() {
    const example = 'Example-string'.capitalise()

    expect(example).toBe('Example string')
  })

  it('replaces a dash with a space', function() {
    const example = 'Example-string-with-more-than-one-dash'.capitalise()
    expect(example).toBe('Example string with more than one dash')
  })

  it('replaces "pwa" with "Progressive web app"', function() {
    const example = 'pwa'.capitalise()
    expect(example).toBe('Progressive web app')
  })

  it('replaces wraps "seo" with acronym element', function() {
    const example = 'seo'.capitalise()
    expect(example).toBe('<acronym title="Search engine optimisation">SEO</acronym>')
  })

  it('capitalises the first letter', function() {
    const example = 'example'.capitalise()
    expect(example).toBe('Example')
  })

  it('keeps the first letter capitalised', function() {
    const example = 'Example'.capitalise()
    expect(example).toBe('Example')
  })
})