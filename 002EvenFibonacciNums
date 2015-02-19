function fibonacci(max) {
    var sequence = [1, 2];
    
    // Includes one num that's > max because the last num of the array is < max at the time
    for (var i = 0; sequence[sequence.length - 1] < max; i++) {
      sequence.push(sequence[i] + sequence[i + 1]);
    }
    
    // There should be a way to not need this conditional
    if (sequence[sequence.length - 1] > max) {
      sequence.splice(sequence.length - 1);
    }
    
    return sumEven(sequence);
}

function sumEven(sequence) {
    var sum = 0;
    
    for (var i = 0; i < sequence.length; i++) {
      if (sequence[i] % 2 === 0) {
        sum += sequence[i];
      }
    }
    
    return sum
}

console.log(fibonacci(4000000));
