function square(num) {
    return num * num;
}

function sumOfSquares(max) {
    var sum = 0;
    
    for (var i = 1; i <= max; i++) {
        sum += square(i);
    }
    
    return sum;
}

function squareOfSums(max) {
    var sum = 0;
    
    for (var i = 0; i <= max; i++) {
        sum += i;
    }
    
    return square(sum);
}

function differenceOfSumAndSquares(max) {
    return squareOfSums(max) - sumOfSquares(max);
}


console.log(differenceOfSumAndSquares(100));
