const findAnswer = require('./ans_finder')

test('testing findAnswer fn for input 0, 15, [5, 10, 25, 100]', () => {
  const result = findAnswer(0, 15, [5, 10, 25, 100])
  const expected = [5, 10]
  expect(result).toEqual(expected)
})
