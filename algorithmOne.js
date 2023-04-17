let arr = ['a', 10, 'b', 'hola', 122, 15];

const separateLettersAndNumbersWithMaxNumber = (arr) => {
  let letters_arr = arr.filter(
    (item) => typeof item === 'string' && /^[a-zA-Z]+$/.test(item)
  );

  let numbers_arr = arr.filter((item) => typeof item === 'number');

  let highest_number = Math.max(...numbers_arr);

  return { letters_arr, numbers_arr, highest_number };
};

const { letters_arr, numbers_arr, highest_number } =
  separateLettersAndNumbersWithMaxNumber(arr);

console.log('Array de letras: ' + letters_arr);
console.log('Array de numeros: ' + numbers_arr);
console.log('Maior numero ' + highest_number);
