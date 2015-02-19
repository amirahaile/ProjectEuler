function smallestMultiple(max) {
    // numbers less than the max num can't be divided by it
    var num = 6;
    
    // JavaScript labeling! (…not recommended)
    next:
    for (var i = 1; i <= max; i++) {
        if (num % i !== 0) {
            num += 1;
            // num is increasing; continue is failing me
            continue next;
        }
        
        if (i === 4) {
            return num;
        }
    }
}

console.log(smallestMultiple(10));
