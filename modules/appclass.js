class Person {
    constructor(name, health){
        this.name = name;
        this.health = health;
    }

    increaseHealth(){
        this.health++;
    }
}
const andy = new Person("Andy", 100);

module.exports = {
    Person,
    andy
}