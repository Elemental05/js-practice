const products = [
  { id: 1, title: "Мышь Logitech G102",  price: 900,  category: "периферия", inStock: true,  rating: 4.7 },
  { id: 2, title: "Клавиатура Keychron", price: 3200, category: "периферия", inStock: false, rating: 4.9 },
  { id: 3, title: "SSD Samsung 1TB",     price: 2800, category: "накопители", inStock: true,  rating: 4.8 },
  { id: 4, title: "Коврик Razer",        price: 450,  category: "периферия", inStock: true,  rating: 4.2 },
  { id: 5, title: "HDD Seagate 2TB",     price: 1900, category: "накопители", inStock: false, rating: 3.9 },
  { id: 6, title: "Монитор LG 27\"",     price: 8500, category: "мониторы",   inStock: true,  rating: 4.6 }
];

const total = products.reduce((acc, p) => acc + p.price, 0);
const averagePrice = Math.round(total / products.length);
// const mostExpensive = products.reduce((acc, p) => {
//     if(acc.price > p.price) {
//         return acc
//     }
//     else{
//         return p
//     }
// }, products[0]);
const mostExpensive = products.reduce(
    (acc, p) => (p.price > acc.price ? p : acc),
    products[0]
);

const byCategory =  products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + p.price;
    return acc;
}, {});

const countByCategory = products.reduce((acc, p) =>{
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
}, {})

const totalCategory = products.reduce((acc, p) => {
    acc.total += p.price;
    acc[p.inStock ? "inStock" : "outOfStock"] += 1;
    return acc;
    },{total: 0, inStock: 0, outOfStock: 0})

console.log("Общая стоимость:", total);
console.log("Средняя стоимость:", averagePrice);
console.log("Самый дорогой товар:", mostExpensive.title, ", " , mostExpensive.price, "грн");
console.log(byCategory);
console.log(countByCategory);
console.log(totalCategory)

// Общая стоимость: 17750
// Средняя стоимость: 2958
// Самый дорогой товар: Монитор LG 27" ,  8500 грн
// { 'периферия': 4550, 'накопители': 4700, 'мониторы': 8500 }
// { 'периферия': 3, 'накопители': 2, 'мониторы': 1 }
// { total: 17750, inStock: 4, outOfStock: 2 }