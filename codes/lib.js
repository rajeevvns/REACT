// HOF with Generics <T>
function filter(data, predicate) {
    var result = [];
    data.forEach(function (elem) {
        if (predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}
;
var nos = [7, 6, 4, 3, 1];
var res = filter(nos, function (no) { return no % 2 === 0; }); // nos is of number[] and T will be number
res.forEach(function (no) { return console.log(no); });
var products = [
    { name: 'Samsung Washing Machine', price: 45000.00, category: 'electronics' },
    { name: 'iPhone', price: 95000.00, category: 'mobile' },
    { name: 'Samsung OLED', price: 245000.00, category: 'tv' },
    { name: 'Samsung Fold', price: 124000.00, category: 'mobile' },
    { name: 'Wacom', price: 6000.00, category: 'electronics' }
];
var mobiles = filter(products, function (p) { return p.category === 'mobile'; }); // T[] is Product[]
// predicate (p) => p.category === 'mobile'
mobiles.forEach(function (m) { return console.log(m); });
