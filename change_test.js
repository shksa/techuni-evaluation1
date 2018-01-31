const exporter = require('./change_algo')

const [change, findAnswer] = [exporter.change, exporter.findAnswer]

describe('', () => {
  // test('brute force approach for input 15, [5, 10, 25, 100]', () => {
  //   const result = change(15, [5, 10, 25, 100])
  //   const expected = [1, 1, 0, 0]
  //   expect(result).toEqual(expected)
  // })

  test('testing findAnswer fn for input 0, 15, [5, 10, 25, 100]', () => {
    const result = findAnswer(0, 15, [5, 10, 25, 100])
    const expected = [5, 10]
    expect(result).toEqual(expected)
  })

  // test('brute force approach for input 15, [1, 5, 10, 25, 100]', () => {
  //   const result = change(15, [5, 10, 25, 100])
  //   const expected = [0, 1, 1, 0, 0]
  //   expect(result).toEqual(expected)
  // })
  // test('', () => {
  //   expect().toBe()
  // })
})
