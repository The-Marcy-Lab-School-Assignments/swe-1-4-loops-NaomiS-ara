const whileToFor = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

const continueGuardClause = () => {
  for (let i = 0; i < 5; i++) {
    // Add a guard clause to skip 2 and 3
    if (i === 2 || i === 3) continue;
    //console.log("Sure glad this isn't 2 or 3");
    console.log(i);
  }
}

module.exports = {
  whileToFor,
  continueGuardClause,
};
