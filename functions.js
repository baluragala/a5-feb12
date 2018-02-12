var calculatePrice = function (price, tax, disc) {
    if (disc === void 0) { disc = 30; }
    console.log(price, tax, disc);
    return price + tax - disc;
};
var calculatePrice1 = function (price, tax, disc) {
    return price + tax - disc;
};
var finalPrice;
finalPrice = calculatePrice(100);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evens = numbers.filter(function (n) {
    console.log(n);
    return n % 2 === 0;
});
console.log(evens);
