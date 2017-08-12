const {
  encodeRailFenceCipher,
  decodeRailFenceCipher,
} = require('../lib/index')

describe('Rail Fence Cipher', () => {
  it('encoding test 1', () => {
    const re = encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3)
    expect(re).toEqual('WECRLTEERDSOEEFEAOCAIVDEN')
  })

  it('decoding test 1', () => {
    const re = decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3)
    expect(re).toEqual('WEAREDISCOVEREDFLEEATONCE')
  })

  it('encoding test 2', () => {
    const re = encodeRailFenceCipher('Hello, World!', 3)
    expect(re).toEqual('Hoo!el,Wrdl l')
  })
})
