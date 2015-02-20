function countPrimes(max) {
  var primes = [];
    
  for (var i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
    
  return primes;
}

function isPrime(num){
  var numIsPrime = true;
    
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        numIsPrime = false;
    }
  }
    
  return numIsPrime;
}

function sumPrimes(max) {
  var primes = countPrimes(max);
  var sum = 0;
    
  for (var i = 0; i < primes.length; i++) {
    sum += primes[i];
  }
    
  return sum;
}

// takes 7 secs for repl.it to calculate
// could that be faster? how?
console.log(sumPrimes(2000000));
