function createMathFunctions() {
  let mathObj = {};

  mathObj.divide = (a, b) => {
    if (b === 0) {
      throw new Error('Divisao por zero nao é permitida');
    }
    return a / b;
  };

  mathObj.sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
  mathObj.subtractArray = (arr) => arr.reduce((acc, curr) => acc - curr);
  mathObj.multiplyArray = (arr) => arr.reduce((acc, curr) => acc * curr, 1);

  return mathObj;
}

let mathFunctions = createMathFunctions();

console.log('Divisão: ' + mathFunctions.divide(10, 2));
console.log('Soma de array: ' + mathFunctions.sum([1, 2, 3, 4, 5]));
console.log(
  'Subtração de array array: ' + mathFunctions.subtractArray([10, 2, 3])
);
console.log(
  'Multiplicação of array: ' + mathFunctions.multiplyArray([1, 2, 3, 4, 5])
);
