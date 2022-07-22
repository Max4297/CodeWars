function summation (num) {
  const array = [];
  for (let i = 0; i < num; i++) array.push(1+i);
  return array.reduce((a,b) => a + b,0);
}
