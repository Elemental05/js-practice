export function addItem(cart, item){
    const found = cart.find(p => p.id === item.id);
    if (found){
        return cart.map(p => p.id === item.id ?
             {...p, qty: p.qty + item.qty} : p)
    }
    return [...cart, item];
}

export function removeItem(cart, id){
    return cart.filter((p) => p.id !== id);
}

export function applyDiscount(cart, percent){
    return cart.map(p => ({...p, price: p.price * (100 - percent) / 100}))
}
