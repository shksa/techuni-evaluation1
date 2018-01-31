const change = require('./change_algo')

describe('', () => {
  test('brute force approach for input 15, [5, 10, 25, 100]', () => {
    const result = change(15, [5, 10, 25, 100])
    const expected = [1, 1, 0, 0]
    expect(result).toEqual(expected)
  })

  // test('', () => {
  //   expect().toBe()
  // })
})
