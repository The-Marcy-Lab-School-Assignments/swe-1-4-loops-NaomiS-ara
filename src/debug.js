function brokenLoop () {
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += i;
  }
  return result;
}

function brokenNested() {
  let result = '';
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      result += `-${i}${j}`;
    }
  }
  return result;
}

module.exports = {
  brokenLoop,
  brokenNested,
};
