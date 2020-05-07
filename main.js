
document.write(`<h2>Завдання 1</h2>`);
let number = +prompt("Введіть натуральне число x");
let sum = 1;

if(number<0){
    document.write(`<h2>Ви ввели не натуральне число</h2>`);
};

if(number==0){
    document.write(`<h2>${number}!=${number}</h2>`);
};

if(number>0){
 for(let i = 1; i <= number; i++){
     sum = sum*i
 };
document.write(`<h2>${number}!=${sum}</h2>`);
};


document.write(`<h2>Завдання 2</h2>`);


for(let i =1000; i<10000; i+=3){
    document.write(`<span>${i} </span>`);
};



document.write(`<h2>Завдання 3</h2>`);

let x = 1;
for(let i=1;i<=55;i++){ 

    document.write(`<span>${x} </span>`);
    x+=2;
};




document.write(`<h2>Завдання 4</h2>`);

for(let i = 90;i>=0;i-=5){
    document.write(`<span>${i} </span>`)
};



document.write(`<h2>Завдання 5</h2>`);
let y = 0;

for(let i=1;i<=20;i++){
   y+=2;
   document.write(`<span>${y} </span>`);
};




document.write(`<h2>Завдання 6</h2>`);

for(let i=2;i<10000; i=2*i-1){
    document.write(`<span>${i} </span>`)
};


document.write(`<h2>Завдання 7</h2>`);

for(let i= -166;i<100; i=2*i+200){
    if(i> -100){
    document.write(`<span>${i} </span>`)
    };
};

document.write(`<h2>Завдання 8</h2>`);


function stepin(a,b){
    let sum =1;
    for(let i=1;i<=b;i++){
        sum *= a;
    }
    return sum;
};

let a=+prompt("Введіть чило 'a'");
let b=+prompt("Введіть його степінь 'b'");
let result=0;


if(b>0){
    result=stepin(a,b);
    document.write(`<span>Число ${a} в степені ${b} рівне ${result}</span>`);
}
else
if(b<0){
    b=-b;
    result=1/stepin(a,b);
    document.write(`<span>Число ${a} в степені ${-b} рівне ${result}</span>`);
}
else
if(b==0){
    result=1;
document.write(`<span>Число ${a} в степені ${b} рівне ${result}</span>`);
}
else{
document.write(`<span>a і b повинні бути числа</span>`);
}