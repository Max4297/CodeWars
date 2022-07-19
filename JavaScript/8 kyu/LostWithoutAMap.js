function maps(array){
  const twoArray = [];
  array.forEach(el => {
    twoArray.push(el+el);
  });
  return twoArray;
}
