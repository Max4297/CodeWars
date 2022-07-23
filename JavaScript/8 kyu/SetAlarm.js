function setAlarm(employed, vacation){
  return employed && vacation ? false : !employed && vacation ? false : !employed && !vacation ? false : true
}
