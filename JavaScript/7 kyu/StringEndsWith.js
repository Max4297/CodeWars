function solution(str, ending){
  const arr = Object.keys(str).length;
  const end = Object.keys(ending).length;
  const mas = str.includes(ending,arr-end);
  return mas;
}
