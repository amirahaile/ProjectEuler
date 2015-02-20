function triangleNum(num) {
  var triangleSum = 0;
    
  for (var i = 1; i <= num; i++) {
    triangleSum += i;
  }
    
  return triangleSum;
}

function factorNum(num) {
  var factors = [];
    
  for (var i = num; i >= 1; i--) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
    
  return factors;
}

function highDivisorTriangleNum(divisors) {
  var lowDivisor = true;
    
  for (var i = 1; lowDivisor === true; i++) {
    if (factorNum(triangleNum(i)).length > divisors) {
      lowDivisor = false;
      return i;
    }
  }
}

// works for 7 but repl.it quits saying it takes too long
// clunky functions or just browser issues?
console.log(highDivisorTriangleNum(500));
