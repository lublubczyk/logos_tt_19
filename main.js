
document.write(`<h2>Завдання 1</h2>`);

let person = {};
person.firstName = "Ivan";
person.secondName = "Ivanov";
person.showData = show;

let newPerson = Object.assign({}, person);
newPerson.firstName = "Petro";
newPerson.secondName = "Petrov";


function show(){
    return document.write(`<h4>Привіт ${this.firstName} ${this.secondName}</h4>`)
};


person.showData();
newPerson.showData();
console.log(person);
console.log(newPerson);


document.write(`<h2>Завдання 2</h2>`);


function sum(){
    return document.write(`<h4>Сума введених чисел рівна ${this.a+this.b}</h4>`);
};
function multiplication(){
    return document.write(`<h4>Добуток введених чисел рівний ${this.a*this.b}</h4>`);
};
function division(){
    return document.write(`<h4>Результат ділення a на  b рівний ${this.a/this.b}</h4>`);
};
function substraction(){
    return document.write(`<h4>Різниця чисел a і b рівна ${this.a-this.b}</h4>`);
};



let myMath = {};
let a=+prompt("Введіть число а");
let b=+prompt("Введіть число b");

myMath.a = a;
myMath.b = b;
myMath.sum = sum;
myMath.multiplication = multiplication;
myMath.division = division;
myMath.substraction = substraction;


console.log(myMath);
myMath.sum();
myMath.multiplication();
myMath.division();
myMath.substraction();
