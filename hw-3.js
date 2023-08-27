let password = prompt('Введите пароль');

if (password == '8') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно')
};

c = 8;
alert(c > 0 && c < 10);
c = 0;
alert(c > 0 && c < 10);
c = 10;
alert(c > 0 && c < 10);
c = -3;
alert(c > 0 && c < 10);
c = 2;
alert(c > 0 && c < 10);

d = 9;
e = 7;

alert(d > 100 || e > 100);

let a = '2';
let b = '3';

a = Number(a);
b = Number(b);

alert(a + b); 

let monthNumber = prompt('введите месяц');
switch (monthNumber) {
    case '1':
            alert('Зима')
        break;
    case '2':
            alert('Зима')
            break;    
    case '3':
            alert('Весна')
            break;    
    case '4':
            alert('Весна')
            break;    
    case '5':
            alert('Весна')
            break;   
    case '6':
            alert('Лето')
                break;  
    case '7':
            alert('Лето')
            break;    
    case '8':
            alert('Лето')
            break;    
    case '9':
            alert('Осень')
            break;    
    case '10':
            alert('Осень')
            break;    
    case '11':
            alert('Осень')
            break;    
    case '12':
            alert('Зима')
            break;    
    default:
        alert('чиво')
        break;
}