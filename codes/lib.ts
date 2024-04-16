// HOF with Generics <T>
function filter<T>(data: T[], predicate: (elem: T) => boolean): T[] {
    let result: T[] = [];
    data.forEach(elem => {
        if (predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
};

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