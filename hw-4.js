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

    let count = 0;
    let n = 1000;
    while (n>50) {
    n /= 2;
    count++;
    }
    console.log(count);


for (let friday = 1; friday <= 31; friday+=7){
        console.log(`Сегодня пятница, ${friday} -е число. Необходимо подготовить отчет`);
}