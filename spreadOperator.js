//example 1
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(numbers);

//example 2
const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
const combineArray = [...arrayOne, ...arrayTwo];
console.log(combineArray);

//example 3
function sum(x, y, z) {
    return x + y + z;
  }
  
  const intNumber = [1, 2, 3];
  
  console.log(sum(...intNumber));