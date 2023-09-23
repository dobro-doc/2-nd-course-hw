function compare(a, b) {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}

function checkEvenNumber(a) {
    if (a % 2 == 0) {
        return 'Число четное';
    } else {
       return 'Число нечетное'; 
    }
}

function numberSquare(a) {
    console.log(a**2);
}

function numberSquare(a) {
    return a**2;
}

"use strict";
let age = prompt('Сколько Вам лет?');
let printMessage;
if (age < 0) {
    printMessage = function () {
        alert('Вы ввели неправильное значение!');
    }
if (age > 0 && age < 13) {
    printMessage = function () {
        alert('Привет, друг!');
    }
} else {
    printMessage = function () {
        alert('Добро пожаловать!');
    }
}

} 

function mult(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
    
}

"use strict";
let num = prompt('Введите число');
let numSquare;
if (isNaN(num)) {
    numSquare = function () {
        alert(`Переданный параметр не является числом`);
    }
} else {
    numSquare = function () {
        let result = num**2;
        return result;
    }
}
