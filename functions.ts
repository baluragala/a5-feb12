let calculatePrice = function(price, tax?: number, disc: number = 30): number {
  console.log(price, tax, disc);
  return price + tax - disc;
};

let calculatePrice1 = (price: number, tax: number, disc: number): number =>
  price + tax - disc;

let finalPrice: number;
finalPrice = calculatePrice(100);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evens = numbers.filter(n => {
  console.log(n);
  return n % 2 === 0;
});

console.log(evens);

let searchFnType: (t: string) => string;

function serachDB(srchTerm: string): string {
  return "";
}

function serachWeb(srchTerm: string): [string] {
  return [""];
}

//searchFnType = serachWeb;
