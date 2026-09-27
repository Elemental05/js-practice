const animal = {
  speak() {
    console.log(this.name + " издаёт звук");
  }
};

const dog = Object.create(animal);   // пустой объект, прототип = animal
dog.name = "Шарик";

console.log(Object.keys(dog));
dog.speak();