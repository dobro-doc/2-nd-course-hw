let i = 0;

while (i < 2) {
    console.log('Привет');
}

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

for (i=7; i <= 22; i++) {
    console.log(i);
}

let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);  
    }


for(let result <= 1000; result > 50;){
    alert(result / 2);
    if (result < 50) {
        break;
    }
}


for (let friday = 1; friday <= 31; friday++){
    if (friday % 7 == 0){
        console.log(`Сегодня пятница, ${friday} -е число. Необходимо подготовить отчет`);
    }
}