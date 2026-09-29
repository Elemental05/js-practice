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

class Mage extends Hero{
    constructor(name, power, hp, mana){
        super(name, power, hp);
        this.mana = mana;
    }
    fireball(target){
        if(this.mana >= 10){
            target.hp -= this.power * 4;
            this.mana -= 10;
            console.log(`${this.name} кастует фаербол в ${target.name}. У ${target.name} осталось ${target.hp} `);
        }
        else{
            this.attack(target);
        }
    }
}
const warrior = new Hero("Конан", 12, 50);
const merlin = new Mage("Мерлін", 4, 40, 20);

do{
    warrior.attack(merlin);
    if(!merlin.isAlive()) break;
    merlin.fireball(warrior);
    if(!warrior.isAlive()) break;
}while(warrior.isAlive() && merlin.isAlive());

const winner = warrior.isAlive() ? warrior : merlin;
console.log(`🏆 Победил ${winner.name}`);
console.log(warrior, merlin);