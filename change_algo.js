const findAnswer = require('./ans_finder')


function change(value, denominations) {
  let result
  for (let startIdx = 0; startIdx < denominations.length; startIdx += 1) {
    result = findAnswer(startIdx, value, denominations)
    if (result === -1) {
      continue
    } else {
      break
    }
  }
  const resultList = []
  for (let i = 0; i < denominations.length; i += 1) {
    if (result[i] === denominations[i]) {
      resultList.push(1)
    } else {
      resultList.push(0)
    }
  }


  // const zerosToFill = denominations.length - result.length
  // for (let i = 0; i < zerosToFill; i += 1) {
  //   answer.push(0)
  // }
  return resultList
}

module.exports = { change, findAnswer }
