let factorial = 1;
let n = 10;

while (true) {
  factorial *= n;
  if (n === 1) {
    break;
  }
  n--;
}

console.log(factorial);