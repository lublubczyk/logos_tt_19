let pasword = prompt("Введіть пароль");
let i = 0;
 
while(i<=4){
    if(pasword == "Пароль"){
        document.write(`<h2>Запрошуємо на сайт</h2>`);
        i+=5;
    }
    else{
        if(i<4){
        alert(`В вас залишилось ${4 - i} спроби`);
        pasword = prompt("Введіть пароль");
        }
        else{
        alert("Будь ласка спробуйте пізніше")  
        };
        i++;
    }
}