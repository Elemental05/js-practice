const cat = { name: "Барсик" };

console.log(Object.keys(cat));   // покажи все поля, которые есть у cat
console.log(cat.name);
console.log(cat.toString);
console.log(cat.fly);

const arr = [10, 20, 30];

console.log(Object.keys(arr));   // все поля массива
console.log(arr.map);

const proto = Object.getPrototypeOf(arr);   // достать прототип arr

console.log(Object.keys(arr).includes("map"));        // есть ли map у самого arr?
console.log(Object.getOwnPropertyNames(proto).includes("map")); // а у его прототипа?

const arr2 = [1, 2];
console.log(Object.getPrototypeOf(arr2) === proto);   // у arr2 тот же прототип?