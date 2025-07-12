// solve power of two problem using recursion

// Write a recursive function that determines whether a given positive integer n is a power of two.

function power(n) {

  if (n == 1) return true;
  if (n == 0 || n % 2 !== 0) return false;

  return power(n / 2);
}

function main() {
  let result = power(1024);
  //console.log(result);

  return result;
}

console.log(main());
