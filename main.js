
document.write(`<h2>Завдання 1</h2>`);
let namber = +prompt("Введіть число від 1 до 12");

switch (namber){
    case 1:
        document.write("Зима місяць січень")
        break
    case 2:
        document.write("Зима місяць лютий")
        break  
    case 3:
        document.write("Весна місяць березень")
        break   
    case 4:
        document.write("Весна місяць квітень")
        break  
    case 5:
        document.write("Весна місяць травень")
        break
    case 6:
        document.write("Літо місяць червень")
        break
    case 7:
        document.write("Літо місяць липень")
        break
    case 8:
        document.write("Літо місяць серпень")
        break
    case 9:
        document.write("Осінь місяць вересень")
        break
    case 10:
        document.write("Осінь місяць жовтень")
        break
    case 11:
        document.write("Осінь місяць листопад")
        break
    case 12:
        document.write("Зима місяць грудень")
        break
     default:
        document.write("Це не можливо зробити")
        break               
};

document.write(`<h2>Завдання 2</h2>`);

let simple = +prompt("Введіть число ми перевіримо чи воно просте");

function chekSimple(number){
    if(number == 2){
        return document.write(`Число ${number}  є простим`);   
    }
    else{
       if(number%2 == 0){
           return document.write(`<span>Число ${number} не є простим</span>`);
       }
       else{
           let idn = 0;
           for(i=3; i<=(number/2); i+=2){
                 if(number%i == 0){
                    idn++;
                };
            };
            if(idn>0){
                return document.write(`<span>Число ${number} не є простим</span>`);
            }
            else{
                return document.write(`Число ${number}  є простим`);
            };
        };
    };

};
chekSimple(simple);


document.write(`<h2>Завдання 3</h2>`);

function maxArg(){
    let number = +prompt("Введіть кількість аргументів функції");
    let max = 0;
    for(let i=1; i<=number;i++){
        let ask = +prompt(`Введіть аргумент №${i}`);
        if(ask>=max){max=ask};
    };
    return document.write(`Найбільший аргумент функції ${max}`);
};
maxArg();