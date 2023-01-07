function findOdd(A) {
  let numberCount = {};
  let setNumber = new Set(A);
  for (let i of setNumber) {
    numberCount[i] = 0;
  }
  for (let i of A) {
    numberCount[i]++;
  }
  for (let key of numberCount) {
    if (numberCount[key] % 2 === 1) {
      return key;
    }
  }
}
console.log(findOdd([1, 1, 2, 2, 4]));
