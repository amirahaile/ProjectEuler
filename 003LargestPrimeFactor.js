// doesn't work for prime numbers
function findFactors(num) {
    var factors = [];
    
    // excludes 1 & 2 from factors list
    for (var i = num - 1; i > 2; i--) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    
    return largestPrime(factors);
}

function largestPrime(factors) {
    for (var i = 0; i < factors.length; i++) {
        // checks if num is prime
        for (var j = 2; j <= Math.sqrt(factors[i]); j++) {
            if (factors[i] % j === 0) {
                // .splice() changes the index which skips numbers
                factors.splice(i, 1);
                // resets i to iterate over skipped nums
                i = -1;
            }
        }
    }
    
    // returns largest of the prime factors
    return factors;
}

/*
repl.it runs too long and quits.
number too big? function too clunky?
*/
console.log(findFactors(600851475143));
