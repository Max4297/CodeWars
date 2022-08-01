function XO(str) {
    const word = str.toUpperCase().split("");
    let count = 0;
    word.forEach(element => {
      (element == 'X') ? count++ : 
      (element == 'O') ? count-- : console.log('1');
    });
    return !count;
}
