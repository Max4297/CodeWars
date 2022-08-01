function oddOrEven(array) {
  if (array ==+ []){
    return "even"
  } else {
   let sum = array.reduce((a, b) => a + b);
   return sum % 2 === 0 ? "even" : "odd" 
  }
}
