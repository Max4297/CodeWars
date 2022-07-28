function min (list){
  list.sort((a,b) => a-b);
  return list[0];
}

function max (list){
  list.sort((a,b) => a-b);
  list.reverse();
  return list[0];
}
