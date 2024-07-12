// Exporting named functions
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Exporting a default function
const multiply1 = (a, b) => a * b;
export default multiply1;


// Importing named functions
import { add, subtract } from './math.js';

// Importing the default function
import multiply2 from './math.js';

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
console.log(multiply2(3, 4)); // Output: 12


// Importing named functions
const { add, subtract } = require('./math.js');

// Importing the default function
const multiply5 = require('./math.js').multiply;

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
console.log(multiply5(3, 4)); // Output: 12

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ];
  
  const names = users.map(user => user.name);
  
  console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
  