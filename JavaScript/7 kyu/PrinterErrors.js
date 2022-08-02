function printerError(s) {
  let count=0;
  const arr_en = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const length = s.length;
  const array = s.split('');
  
  for (let i = 0; i < arr_en.length; i++) {
    array.forEach(el => {
      if (el === arr_en[i]){
        count++
      } 
    })
  }
  return count + "/" + length;
}
