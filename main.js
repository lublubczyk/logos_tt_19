
document.write(`<h2>Завдання 1</h2>`);

let fibo = (number) =>{
    let x=0;
    let y=1;
    let print=0;
     document.write(`<span>${y} </span>`);
    for(let i = 0;i<number-1; i++){
        print=x+y;
        document.write(`<span>${print} </span>`);
        x=y;
        y=print;
    };
};
fibo(+prompt("Введіть кількість членів послідовності Фібоначі"));



document.write(`<h2>Завдання 2</h2>`);


let sumGeoCycle = function(number,denom){
    let x = 1;
    let sum = 0;
    for(let i=0;i<number;i++){
        sum+=x;
        x*=denom;
    };
    return document.write(`<h3>Сума перших ${number} чисел геометричної прогресії з знаменнико ${denom} рівна ${sum}</h3>`);
}
sumGeoCycle(+prompt("Кількість чисел прогресії"), +prompt("Знаменник прогресії"));




let sumGeoForm=(number,denom)=>{document.write(`<h3>Сума перших ${number} чисел геометричної прогресії рівна ${(1 - denom**number)/(1 - denom)}</h3>`)};

sumGeoForm(+prompt("Кількість чисел прогресії"),+prompt("Знаменник прогресії"));



document.write(`<h2>Завдання 3</h2>`);


let primeNumber=(start,finish)=>{
                 
       nextNumber:
       for (let i = 2; i <= finish; i++) {

           for (let j=2; j<i; j++) {
           if (i%j == 0) continue nextNumber;
           };
          if(i>=start) document.write(`<span>${i} </span>`);
    
        };
};
primeNumber(+prompt("Введіть початок проміжку простих чисел"),+prompt("Введіть кінець проміжку"));