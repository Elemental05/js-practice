import {formatLine, formatPrice} from './format.js';

export default function printReceipt(cart){
    const totalPrice = cart.reduce((acc, product) => acc + product.price * product.qty, 0);
    cart.forEach((product) => console.log(formatLine(product)));
    console.log(`Итого: ${formatPrice(totalPrice)}`);
}