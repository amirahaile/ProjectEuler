function nthPrimeNum(num) {
    var primes = [];
    
    for (var i = 2; primes.length - 1 <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    
    return primes[primes.length - 1];
}

function isPrime(num) {
    var prime = true; 
    
    for (var i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
        }   
    }
    
    return prime;
}

console.log(nthPrimeNum(10001));
