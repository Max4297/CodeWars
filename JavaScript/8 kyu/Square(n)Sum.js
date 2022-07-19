function squareSum(numbers){
  let sum = 0;
  numbers.forEach(el => {
    sum = Math.pow(el, 2) +sum;
    console.log(sum);
  });
  return sum;
}
