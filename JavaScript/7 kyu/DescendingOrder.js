function descendingOrder(str) { 
  const array = (""+str).split("").map(Number);
  const array2 = array.sort(
    function compareNumbers(a, b) {
    return b - a;}).join("");
  return Number(array2);
}
