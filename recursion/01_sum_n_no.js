//calculate the sum of first n natural number using recursion

// input = 5
// output = 15

function printNum(n) {
  if (n == 1) {
    return 1;
  }

  return n + printNum(n - 1);
}

function main() {
  let result = printNum(5);
  console.log(result);
  return 0;
}
main();
