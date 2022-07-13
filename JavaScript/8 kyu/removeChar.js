function removeChar(str){
  //  //You got this!
  let str2= str.replace(/.$/, '');
  str = str2.replace(/./, '');
  console.log(str2);
  return str
};
