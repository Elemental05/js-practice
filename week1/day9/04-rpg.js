const hero = {
    isAlive(){
        if (this.hp <= 0){
            return false;
        }
        return true;
    },
    attack(target){
        target.hp -= this.power;
        console.log(`${this.name}, бьёт ${target.name} на ${this.power}. У ${target.name} осталось ${target.hp} `);
    },
};

const mage = Object.create(hero);
mage.fireball = function(target){
    if(this.mana >= 10){
        target.hp -= this.power * 4;
        this.mana -= 10;
        console.log(`${this.name} кастует фаербол в ${target.name}. У ${target.name} осталось ${target.hp} `);
    }else{
        this.attack(target);
    }
};

const warrior = Object.create(hero);
warrior.name = "Конан";
warrior.power = 12;
warrior.hp = 50;

const merlin = Object.create(mage);
merlin.name = "Маг";
merlin.hp = 40;
merlin.power = 4;
merlin.mana = 20;

do{

    warrior.attack(merlin);
    if(!merlin.isAlive()) break;
    merlin.fireball(warrior);
    if(!warrior.isAlive()) break;
}while(warrior.isAlive() && merlin.isAlive());

const winner = warrior.isAlive() ? warrior : merlin;
console.log(`🏆 Победил ${winner.name}`);

