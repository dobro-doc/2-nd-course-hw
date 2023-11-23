let products = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < products.length; i++) {
	if (products[i] == 10) break;
	console.log(products[i]);
}


products.indexOf(4);


let items = [1, 3, 5, 10, 20];
items = items.join(' ');


let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = []; 
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(1); 
	}
}
console.log(arr);


let nums = [1, 1, 1];
nums.push('2', '2', '2');
console.log(nums);


let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
arr.pop();
console.log(arr);


const numbs = [9, 8, 7, 6, 5];
if (numbs.includes(Number(prompt(`Угадай число`)))) {
    alert(`Угадал`)
} else {
    alert(`Не угадал`)
};


let a = 'abcdef';
a = a.split('');
a = a.reverse();
a = a.join('');
console.log(a);


let b = [[1, 2, 3,], [4, 5, 6]];
b = b.flat();
console.log(b);


const c = [7, 5, 2, 8, 3];
for (let i = 0; i < c.length - 1; i++) {
    console.log(c[i] + c[i + 1]);
}


const array = [3, 5, 8, 2, 9, 10];
function task11(array) { (el % 1 === 0)
	let result = [el * el];
	return result;
}


function task11(array) {
    const tax = array.map(function(el) {

      return el * el;
    });

    console.log(tax);

	return tax;
}
console.log(task11([1, 2, 3, 4, 5]));


function getLengthWords(array) {

    const word = array.map(function(el) {

      return el.length;
    });
    
return word;
}
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));


function filterPositive(array) {

    const tax = array.filter(function(el) {
    
        return el < 0;
    });

return tax;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));