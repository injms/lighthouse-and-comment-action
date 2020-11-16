const pc2dp = require('../modules/pc2dp')

describe('Capitalise protoype extension', function() {
  it('turns a number into a percentage', function() {
    const example = pc2dp(1)
    expect(example).toBe(100)

    const example2 = pc2dp(0.51)
    expect(example2).toBe(51)

    const example3 = pc2dp(0.51000)
    expect(example3).toBe(51)

    const example4 = pc2dp(0)
    expect(example4).toBe(0)
  })

  it('goes to two decimal places', function() {
    const example = pc2dp(0.5625)
    expect(example).toBe(56.25)

    const example2 = pc2dp(0.562525)
    expect(example2).toBe(56.25)

    const example3 = pc2dp(0.11555)
    expect(example3).toBe(11.56)
  })
})