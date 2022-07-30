function reverseWords(str) { 
  const array = str.split("").reverse().join("").split(" ").reverse().join(" ");
  return array
}
