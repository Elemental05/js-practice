const player = {
  name: "Vlad",
  hi() { console.log("привет, я " + this.name); }
};

setTimeout(player.hi, 1000);          // A
setTimeout(player.hi(), 1000);        // B
setTimeout(() => player.hi(), 1000);  // C