const compare = (a, b) => {
    return (a >= b) ? b : a;
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

function askAge() {
    let age = Number(prompt("Сколько вам лет?"));
    if(age < 0) {
        alert('Вы ввели неправильное значение!');
    } else if (age > 0 && age < 13) {
      alert('Привет, друг!');
    } else() {
      alert('Добро пожаловать!');
    }
  }

function mult(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    } 
}

function numSquare() {
    let num = Number(prompt("Введите число"));
    if(isNaN(num)) {
        alert('Переданный параметр не является числом');
    } else() {
        let result = num**2;
        return result;
    }
  }

  function getCircleArea() {
    return this.radius**2 * 3.14;
  }
  function getCirclePerimeter() {
    return this.radius * 2 * 3.14;
  }
  
  const circle1 = {
    radius: 5,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
  };
  
  const circle2 = {
    radius: 23,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
  };

