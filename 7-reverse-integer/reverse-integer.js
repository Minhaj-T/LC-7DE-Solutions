/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rev = 0;
    let xCopy = x;

    x = Math.abs(x)
    while (x > 0) {
        let last = x % 10;
        rev = rev * 10 + last;
        x = Math.floor(x / 10)
    }

    let limit = Math.pow(2, 31)
    if (rev < -limit || rev > limit) return 0;

    return xCopy < 0 ? -rev : rev;

};