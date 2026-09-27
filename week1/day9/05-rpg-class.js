class Hero{
    constructor(name, power, hp){
        this.name = name;
        this.power = power;
        this.hp = hp;
    }
    isAlive(){
        if(this.hp <= 0){
            return false;
        }
        return true;
    }
    attack(target){
        target.hp -= this.power;
        console.log(`${this.name}, бьёт ${target.name} на ${this.power}. У ${target.name} осталось ${target.hp} `);
    }
}

const warrior = new Hero("Конан", 12, 50);
const rogue = new Hero("Тень", 13, 45);

do{
    warrior.attack(rogue);
    if(!rogue.isAlive()) break;
    rogue.attack(warrior);
    if(!warrior.isAlive()) break;
}while(warrior.isAlive() && rogue.isAlive());

const winner = warrior.isAlive() ? warrior : rogue;
console.log(`🏆 Победил ${winner.name}`);