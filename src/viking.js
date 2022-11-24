// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        let lifeViking = this.health -= damage;
        if(lifeViking > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        if(lifeViking <= 0){
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage){
        let lifeSaxon = this.health -= damage;
        if(lifeSaxon > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        if(lifeSaxon <= 0){
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

addViking(Viking){
    this.vikingArmy.push(Viking)
}

addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
}

vikingAttack(){
    
    let vikAttack = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);

    if(this.saxonArmy[0].health <= 0){
        this.saxonArmy.splice(0);
    }

    return vikAttack;

    // return this.vikingArmy;

}

saxonAttack(){

    let saxAttack = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);

    if(this.vikingArmy[0].health <= 0){
        this.vikingArmy.splice(0);
    }

    return saxAttack;

    // return this.saxonArmy;
}

genericAttack(attacker, attacked){
    
    let attack = attacked[0].receiveDamage(this.attacker[0].strength);

    if(this.attacked[0].health <= 0){
        this.attacked.splice(0);
    }

    return attack;
}


showStatus(){

    if(this.saxonArmy.length == 0){
        return `Vikings have won the war of the century!`
    }
    if(this.vikingArmy.length == 0){
        return `Saxons have fought for their lives and survived another day...`
    }
    if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
        return `Vikings and Saxons are still in the thick of battle.`
    }

}

}