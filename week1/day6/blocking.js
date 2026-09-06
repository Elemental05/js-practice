const t0 = Date.now();
setTimeout(() => console.log(Date.now() - t0), 100);

while (Date.now() - t0 < 2000){};

console.log("синхронный код закончился");