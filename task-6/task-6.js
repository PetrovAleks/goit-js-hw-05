let input;
const numbers = [];
let total = 0;
console.log(input);
do {
  input = prompt('Ввудите любое число!');

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    // eslint-disable-next-line
    continue;
  }
  numbers.push(Number(input));
} while (input !== null);
console.log(numbers);
if (numbers.length !== 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}

console.log(`Общая сумма чисел равна ${total}`);
