const products = [
  { id: 1, title: "Мышь Logitech G102",  price: 900,  category: "периферия", inStock: true,  rating: 4.7 },
  { id: 2, title: "Клавиатура Keychron", price: 3200, category: "периферия", inStock: false, rating: 4.9 },
  { id: 3, title: "SSD Samsung 1TB",     price: 2800, category: "накопители", inStock: true,  rating: 4.8 },
  { id: 4, title: "Коврик Razer",        price: 450,  category: "периферия", inStock: true,  rating: 4.2 },
  { id: 5, title: "HDD Seagate 2TB",     price: 1900, category: "накопители", inStock: false, rating: 3.9 },
  { id: 6, title: "Монитор LG 27\"",     price: 8500, category: "мониторы",   inStock: true,  rating: 4.6 }
];

const titles = products.map(p => p.title).join(", ");

const stockProducts = products.filter(i => i.inStock);

const found = products.find(p => p.id === 4);
const missing = products.find(p => p.id === 99);

const hasExpensive  = products.some(p => p.price > 5000);
const allRatedWell  = products.every(p => p.rating > 4.0);

const catalog = products.map(p => `${p.title} - ${p.price} грн`);

const inStockPeripherals = products
  .filter(p => p.category === "периферия" && p.inStock)
  .map(p => p.title);

console.log("В наличии: ", stockProducts.length);
console.log(found.title);
console.log(missing?.title ?? "Товар не найден");
console.log(hasExpensive);
console.log(allRatedWell);
catalog.forEach(item => console.log(item));
console.log("Преферія в наявності:", inStockPeripherals);

// В наличии:  4
// Коврик Razer
// Товар не найден
// true
// false
// Мышь Logitech G102 - 900 грн
// Клавиатура Keychron - 3200 грн
// SSD Samsung 1TB - 2800 грн
// Коврик Razer - 450 грн
// HDD Seagate 2TB - 1900 грн
// Монитор LG 27" - 8500 грн
// Преферія в наявності: [ 'Мышь Logitech G102', 'Коврик Razer' ]