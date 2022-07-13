function bmi(weight, height) {
  const imt = (weight / (height*height));
  let temp;
  if (imt <= 18.5) temp ="Underweight";
  if (imt > 18.5 && imt <= 25.0) temp ="Normal";
  if (imt > 25.0 && imt <= 30.0) temp ="Overweight";
  if (imt > 30) temp ="Obese";
  return temp;
}
