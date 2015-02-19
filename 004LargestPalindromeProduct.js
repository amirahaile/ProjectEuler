function isPalindrome(products) {
    var palindromes = [];
    
    for (var i = 0; i < products.length; i++){
        var numReverse = products[i].toString().split("").reverse().join("");
        
        if (products[i].toString() === numReverse) {
            palindromes.push(products[i]);
        }
    }
    
    // .apply() allows Math.max() to be used on a numeric array
    return Math.max.apply(null, palindromes);
}

function threeDigitProducts() {
    var num1 = 100;
    var num2 = 100;
    var products = [];
    
    while (num1 < 1000) {
        while (num2 < 1000) {
            products.push(num1 * num2);
            num2++;
        }
        
        // resets num2
        num2 = 100;
        num1++;
    }
    
    return isPalindrome(products);
}

console.log(threeDigitProducts());
