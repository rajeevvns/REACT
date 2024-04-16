import { filter, map } from './lib';

let nos: number[] = [7, 6, 4, 3, 1];

let res: number[] = filter(nos, (no) => no % 2 === 0); // nos is of number[] and T will be number

res.forEach(no => console.log(no))

//predicate  (no) => no % 2 === 0

type Product = {
    name: string,
    price: number,
    category: string
}

let products: Product[] = [
    { name: 'Samsung Washing Machine', price: 45000.00, category: 'electronics' },
    { name: 'iPhone', price: 95000.00, category: 'mobile' },
    { name: 'Samsung OLED', price: 245000.00, category: 'tv' },
    { name: 'Samsung Fold', price: 124000.00, category: 'mobile' },
    { name: 'Wacom', price: 6000.00, category: 'electronics' }

]

let mobiles: Product[] = filter(products, (p) => p.category === 'mobile'); // T[] is Product[]

// predicate (p) => p.category === 'mobile'

mobiles.forEach(m => console.log(m));

console.log("*********** map ***********");

let output: number[] = map(nos, no => no * 2);
output.forEach(no => console.log(no));

function toCard(p: Product) {
    return `
        <div className='card'>
            <h1>${p.name}</h1>
            <h4>${p.price}</h4>
        </div>
    `
}
let cards: string[] = map(products, toCard);
// let cards: string[] = map(products, p => `
//         <div className='card'>
//         <h1>${p.name}</h1>
//         <h4>${p.price}</h4>
//     </div>
// ` );

cards.forEach(card => console.log(card));

console.log("*****");

let names: string[] = map(products, p => p.name);
names.forEach(name => console.log(name));