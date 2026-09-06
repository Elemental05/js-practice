export function formatPrice(value){
    return `${value} грн`;
}

export function formatLine(item){
    const {title, price, qty} = item;
    const sum = price * qty;
    return `${title} x${qty} - ${formatPrice(sum)}`;
}