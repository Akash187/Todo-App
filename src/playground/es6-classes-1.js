console.log("Running...");

//Car
//make
//model
//vin
//getDescription

class Person{
  constructor(name='Anonymous', age = 21){
    this.name = name;
    this.age = age;
  }
  getGretting(){
    return `Hi, I am ${this.name} !`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person('Akash Kumar Seth');
console.log(me.getGretting());
const mrX = new Person('Ayoosh Singh', 22);
console.log(mrX.getDescription());


//SubClasses
class Student extends Person{
  constructor(name, age, major='Not Defined'){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
      description += `Their major is ${this.major}.`;
    }
    return description;
  }
}

const meS = new Student('Akash Kumar Seth');
console.log(meS.getGretting());
const mrXS = new Student('Ayoosh Singh', 22, 'Msc(Chemistry)');
console.log(mrXS.getDescription());
