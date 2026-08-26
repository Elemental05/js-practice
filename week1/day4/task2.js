const cart = {
  owner: { name: "Vlad", city: "Kyiv" },
  items: [
    { id: 1, title: "Мышь", price: 500 },
    { id: 2, title: "Клава", price: 1200 },
  ],
  total: 1700,
};

function addItem(cart, item){
    const items = [...cart.items, item];
    return {...cart, items, total: items.reduce((acc, product) => acc + product.price, 0)};
}

function removeItem(cart, id){
    const items = cart.items.filter((product) => product.id !== id);
    const total = items.reduce((acc, product) => acc + product.price, 0);
    return { ...cart, items, total };
}

function applyDiscount(cart, percent) {
  return {
    ...cart,
    owner: { ...cart.owner },
    total: cart.total * (100 - percent) / 100,
  };
}

const cart2 = addItem(cart, { id: 3, title: "Коврик", price: 300 });

console.log(cart === cart2);              // false — разные объекты
console.log(cart.items.length);           // 2 — оригинал цел
console.log(cart2.items.length);          // 3

const cart3 = removeItem(cart, 1);
console.log(cart3.total);         // 1200
console.log(cart.items.length);   // 2

const cart4 = applyDiscount(cart, 10);
cart4.owner.name = "Ivan";
console.log(cart.owner.name);     // ← вот тут интересное