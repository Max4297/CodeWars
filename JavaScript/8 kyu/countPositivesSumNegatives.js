function countPositivesSumNegatives(input) {
  const array = [0, 0]

  if (input === null || input.length < 1 ) {
    return [];
  }

    for (let i = 0; i < input.length; i++) {
      if (input[i] <= 0) {
      array[1] += input[i];
      } else{
      array[0] += 1;
      }
    }
  return array;
}
