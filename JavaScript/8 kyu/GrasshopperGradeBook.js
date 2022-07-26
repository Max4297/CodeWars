function getGrade (s1, s2, s3) {
  const score = (s1+s2+s3)/3;

  return (score>=90) 
  ? 'A' 
  : (score < 90 && score >= 80)
  ? 'B'
  : (score < 80 && score >= 70)
  ? 'C'
  : (score < 70 && score >= 60)
  ? 'D' 
  : 'F' 
}
