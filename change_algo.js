const findAnswer = require('./ans_finder')

function makeResultList(optimalDenoms, denominations) {
  const resultList = []
  const optDenomSet = new Set(optimalDenoms)
  for (let i = 0; i < denominations.length; i += 1) {
    if (optDenomSet.has(denominations[i])) {
      resultList.push(1)
    } else {
      resultList.push(0)
    }
  }

  return resultList
}


function change(value, denominations) {
  let optimalDenoms
  for (let startIdx = 0; startIdx < denominations.length; startIdx += 1) {
    optimalDenoms = findAnswer(startIdx, value, denominations)
    if (optimalDenoms === 'try from next index') {
      continue
    } else {
      break
    }
  }

  const result = makeResultList(optimalDenoms, denominations)

  return result
}

module.exports = { change, findAnswer }
