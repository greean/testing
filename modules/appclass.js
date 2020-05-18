class Person {
    constructor(name, health){
        this.name = name;
        this.health = health;
    }

    increaseHealth(){
        this.health++;
    }
    decreaseHealth(){
        this.health--;
    }
}
const andy = new Person("Andy", 100);
const message = (name) => {
    return `Hi ${name}, how are you?`;
};

module.exports = {
    Person,
    andy,
    message
}