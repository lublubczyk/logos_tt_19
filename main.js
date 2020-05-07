let name = prompt("Введіть своє ім'я");
   if(name == "" || name == undefined){
       document.write(`<h3>Вхід скасовано</h3>`)
   }
   else{
       if(name == "Імя"){
           let password = prompt("Введіть пароль");
           if(password == undefined){
               document.write(`<h3>Вхід скасовано</h3>`)
            }
           else{
               if(password === "ЛОГОС"){
                   document.write(`<h2>Ласкаво просимо</h2>`)
               }
               else{
                   document.write(`Пароль невірний`)
               }
            }

        }
       else{
           document.write(`<h3>Я вас не знаю</h3>`)
        }
   };

   


   let number = prompt("Введіть число (від 1 до 12)");
   if(number >= 1 && number<= 12){
        if(number == 1){
            alert("Зима місяць січень")
         };
        if(number == 2){
            alert("Зима місяць лютий")
         };
         if(number == 3){
            alert("Весна місяць березень")
         };
         if(number == 4){
            alert("Весна місяць квітень")
         };
         if(number == 5){
            alert("Весна місяць травень")
         };
         if(number == 6){
            alert("Літо місяць червень")
         };
         if(number == 7){
            alert("Літо місяць липень")
         };
         if(number == 8){
            alert("Літо місяць серпень")
         };
         if(number == 9){
            alert("Осінь місяць вересень")
         };
         if(number == 10){
            alert("Осінь місяць жовтень")
         };
         if(number == 11){
            alert("Осінь місяць листопад")
         };
         if(number == 12){
            alert("Зима місяць грудень")
         };


     }
    else{
        alert("Неможливо")
    };    









let n = 0;
let ask = prompt("Скільки пальців на руці?");
     if(ask == 5){
        n+=1
     }
   ask = prompt("А на другій?");
     if(ask ==5){
        n+=1
     }  
   ask = prompt("Західна столиця України?");
     if( ask == "Львів"){
         n+=1
     } 
     ask = prompt("В якому році Україна здобула незалежність?");
     if( ask == 1991){
         n+=1
     }  
     ask = prompt("Коли заснували Львів?");
     if( ask == 1256){
         n+=1
     }  
     ask = prompt("Скільки годин має доба?");
     if( ask == 24){
         n+=1
     }  
     ask = prompt("Скільки днів у році?");
     if( ask == 365){
         n+=1
     }  
     ask = prompt("Скільки кілограм в одному центнері?");
     if( ask == 100){
         n+=1
     }  
     ask = prompt("Столиця України?");
     if( ask == "Київ"){
         n+=1
     }  
     ask = prompt("Найбільше місто України?");
     if( ask == "Київ"){
         n+=1
     }  
  
document.write(`<span>Ви набрали ${n} балів`);