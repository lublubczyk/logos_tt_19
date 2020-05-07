
document.write(`<h2>Завдання 1</h2>`);

getDigits=(number)=>{return document.write(`<h4>Дробова частина рівна ${(number-Math.floor(number)).toFixed(4)}</h4>`)};
getDigits(+prompt("Введіть не ціле число"));


document.write(`<h2>Завдання 2</h4>`);


function getAria(number){
        let i=0;
        do{
          if(number>0){i++}
          else{
                if(number==0){
                   alert("Будь ласка введіть радіус");
                   number=+prompt("Введіть числове значення");
                } 
                else{
                   alert("Повинно бути числове значення");
                   number=+prompt("Введіть числове значення");
                };
            };
        }  
        while(i<=0);
    return document.write(`<h4>Площа круга радіусом ${number}m становить ${(Math.PI*Math.pow(number,2)).toFixed(4)}m2</h4>`);
};

getAria(+prompt("Введіть радіус круга"));




document.write(`<h2>Завдання 3</h2>`);


function getSqrt(number){
    let i=0;
    do{
        if(number>0){i++}
        else{
          if(number<0){number=+prompt("Введіть додаднє число")}
          else{
            if(number==0){number=+prompt("Будь ласка введіть число")}
            else{number=+prompt("Повинно бути числове значення")};
           };
        };  
    }
    while(i<=0);
    return document.write(`<h4>Корінь квадратний з ${number} рівний ${Math.sqrt(number).toFixed(3)}</h4>`);
};

getSqrt(+prompt("Введіть додатнє число"));









