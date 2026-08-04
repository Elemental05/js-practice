const products = [
  { id: 1, title: "Мышь Logitech G102",  price: 900,  category: "периферия", inStock: true,  rating: 4.7 },
  { id: 2, title: "Клавиатура Keychron", price: 3200, category: "периферия", inStock: false, rating: 4.9 },
  { id: 3, title: "SSD Samsung 1TB",     price: 2800, category: "накопители", inStock: true,  rating: 4.8 },
  { id: 4, title: "Коврик Razer",        price: 450,  category: "периферия", inStock: true,  rating: 4.2 },
  { id: 5, title: "HDD Seagate 2TB",     price: 1900, category: "накопители", inStock: false, rating: 3.9 },
  { id: 6, title: "Монитор LG 27\"",     price: 8500, category: "мониторы",   inStock: true,  rating: 4.6 }
];

const productsByPrice = [...products]
    .sort((a, b) => a.price - b.price)
    .map(p => `${p.title} - ${p.price} грн`);

const topThree = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 3)
    .map(p => `${p.title} - ${p.price} грн`);

const byCategory =  products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + p.price;
    return acc;
}, {});
const sortedCategories = Object.entries(byCategory)
    .sort((a, b) => b[1] - a[1])
    .map(pair => `${pair[0]} - ${pair[1]} грн`);

const catalogReport = products.map(p => `${p.inStock ? "✓" : "✗"} ${p.title} - ${p.price} грн`).join("\n");

productsByPrice.forEach(item => console.log(item));
console.log(products[0].title)
console.log(productsByPrice);

console.log(topThree);
sortedCategories.forEach(item => console.log(item));

console.log(catalogReport);

// Коврик Razer - 450 грн
// Мышь Logitech G102 - 900 грн
// HDD Seagate 2TB - 1900 грн
// SSD Samsung 1TB - 2800 грн
// Клавиатура Keychron - 3200 грн
// Монитор LG 27" - 8500 грн
// Мышь Logitech G102
// [
//   'Коврик Razer - 450 грн',
//   'Мышь Logitech G102 - 900 грн',
//   'HDD Seagate 2TB - 1900 грн',
//   'SSD Samsung 1TB - 2800 грн',
//   'Клавиатура Keychron - 3200 грн',
//   'Монитор LG 27" - 8500 грн'
// ]
// [
//   'Монитор LG 27" - 8500 грн',
//   'Клавиатура Keychron - 3200 грн',
//   'SSD Samsung 1TB - 2800 грн'
// ]
// мониторы - 8500 грн
// накопители - 4700 грн
// периферия - 4550 грн
// ✓ Мышь Logitech G102 - 900 грн
// ✗ Клавиатура Keychron - 3200 грн
// ✓ SSD Samsung 1TB - 2800 грн
// ✓ Коврик Razer - 450 грн
// ✗ HDD Seagate 2TB - 1900 грн
// ✓ Монитор LG 27" - 8500 грн