function powerSum(num, power) {
  // produces 1.0715086071862673e+301
  // .toFixed() doesn't seem to produce an effect
  // might have to use jQuery to solve this one
  var digits = Math.pow(num, power).toFixed(20).toString().split("");
  var sum = 0;
    
  for (var i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i], 10);
  }
    
  return sum;
}

console.log(powerSum(2, 1000));
