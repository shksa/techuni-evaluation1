const findAnswer = require('./ans_finder')

describe('testing findAnswer fn', () => {
  test('testing findAnswer fn for input 0, 15, [5, 10, 25, 100]', () => {
    const result = findAnswer(0, 15, [5, 10, 25, 100])
    const expected = [5, 10]
    expect(result).toEqual(expected)
  })

  test('testing findAnswer fn for input 0, 15, [1, 5, 10, 25, 100]', () => {
    const result = findAnswer(0, 15, [1, 5, 10, 25, 100])
    const expected = -1
    expect(result).toEqual(expected)
  })

  test('testing findAnswer fn for input 1, 15, [1, 5, 10, 25, 100]', () => {
    const result = findAnswer(1, 15, [1, 5, 10, 25, 100])
    const expected = [5, 10]
    expect(result).toEqual(expected)
  })
})
