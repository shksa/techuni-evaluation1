function findAnswer(startIdx, value, denominations) {
  let remainingValue = value
  let answer = []
  for (let i = startIdx; i < denominations.length; i += 1) {
    if (remainingValue >= denominations[i]) {
      remainingValue -= denominations[i]
      answer.push(denominations[i])
      if (remainingValue === 0) {
        break
      }
    } else if (remainingValue < denominations[i]) {
      answer = 'try from next index'
      break
    }
  }
  return answer
}

module.exports = findAnswer
