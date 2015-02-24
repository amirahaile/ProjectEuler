// kept outside of collatz() so it's not refreshed with recursive function
var chain = [];

function collatz(num) {
  chain.push(num);
    
  if (num > 1) {
    if (num % 2 === 0) {
      collatz(num / 2);
    } else {
      collatz(num * 3 + 1);
    }
  }
    
  return chain;
}

function longestChain(max) {
  var chainLength = 0;
  var startNum;
    
  for (var i = 1; i < max; i++) {
    if (collatz(i).length > chainLength) {
      chainLength = collatz(i).length;
      startNum = i;
    }
  }
    
  return startNum;
}

// collatz(13) works and longestChain(5) works but
// crashed the browser so remains unsolved
console.log(longestChain(1000000));
