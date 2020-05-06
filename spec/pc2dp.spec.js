describe('Capitalise protoype extension', function() {
  beforeAll( function() {
    Number.prototype.pc2dp = require('../modules/pc2dp')
  })

  it('turns a number into a percentage', function() {
    const example = (1).pc2dp()
    expect(example).toBe(100)

    const example2 = (0.51).pc2dp()
    expect(example2).toBe(51)

    const example3 = (0.51000).pc2dp()
    expect(example3).toBe(51)

    const example4 = (0).pc2dp()
    expect(example4).toBe(0)
  })

  it('goes to two decimal places', function() {
    const example = (0.5625).pc2dp()
    expect(example).toBe(56.25)

    const example2 = (0.562525).pc2dp()
    expect(example2).toBe(56.25)

    const example3 = (0.11555).pc2dp()
    expect(example3).toBe(11.56)
  })
})