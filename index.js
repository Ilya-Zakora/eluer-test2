function finabochi(n) {
    let a = 1;
    let b = 1;
    let sum = 0;
    while(true) {
        let c = b + a;
        a = b;
        b = c;
        if(a%2 === 0) {
            sum += a;
        }
        if (b > n) break;
    }
    return sum;
}
console.log(finabochi(4000000));