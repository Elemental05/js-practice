const users = [
  { name: "Vlad", age: 25, address: { city: "Kyiv" }, nickname: "vladko" },
  { name: "Ivan", address: { city: "Lviv" } },        // нет age
  { name: "Olga", age: 0, nickname: "" },             // нет address, age = 0
  { age: 24, address: {city: "Kriviy Rih"}, nickname: "Klein" },
  { age: 32, address: {city: "Kharhiv"}},
  { name: "Petro", age: 40, address: {} },        // address есть, а city внутри нет
  { name: "Anna", age: null, address: { city: "Sumy" } },
];

function normalizeUser({name = "Аноним", age, address, nickname}){
    const city = address?.city ?? "неизвестно";
    
    return{
      name,
      age: age ?? 18,
      city,
      nickname: nickname || name,
    };
}
console.table(users.map(normalizeUser));