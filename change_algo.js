function change(value, denominations) {
  let remainingValue = value
  const answer = []
  for (let i = 0; i < denominations.length; i += 1) {
    if (remainingValue < denominations[i]) {
      remainingValue -= denominations[i]
      answer.push(1)
    }
    if (remainingValue === 0) {
      break
    }
  }
  const zerosToFill = denominations.length - answer.length
  for (let i = 0; i < zerosToFill; i += 1) {
    answer.push(0)
  }
  return answer
}

module.exports = change
