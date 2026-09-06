import { addItem, removeItem, applyDiscount } from './cart.js';
import printReceipt from './receipt.js';

const mouse    = { id: 1, title: "Мышка",      price: 400,  qty: 1 };
const keyboard = { id: 2, title: "Клавиатура", price: 1200, qty: 1 };

let cart = [];
cart = addItem(cart, mouse);
cart = addItem(cart, keyboard);
cart = addItem(cart, mouse);        // повтор — должен поднять qty, а не добавить строку

console.log("--- ЧЕК ---");
printReceipt(cart);

const discounted = applyDiscount(cart, 10);
console.log("\n--- ЧЕК СО СКИДКОЙ 10% ---");
printReceipt(discounted);

console.log("\n--- ИСХОДНАЯ КОРЗИНА (должна быть без скидки) ---");
printReceipt(cart);

console.log("\n--- БЕЗ КЛАВИАТУРЫ ---");
printReceipt(removeItem(cart, 2));