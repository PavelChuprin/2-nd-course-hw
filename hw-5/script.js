// #1

const smallValue = (a, b) => {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

console.log(smallValue(8, 4));
console.log(smallValue(6, 6));

// #2

let n = Number(prompt('Введите любое число'));

const evenOddNumber = (n) => {
	if (n % 2 == 0) {
		return alert('Число четное');
	} else {
		return alert('Число нечетное');
	}
}

evenOddNumber(n);

// #3.1

const consoleSquareNumber = (k) => console.log(k ** 2);

consoleSquareNumber(5);

// #3.2

const returnSquareNumber = (l) => l * l;

console.log(returnSquareNumber(10));

// #4

let age = Number(prompt('Сколько вам лет?'));

const userAge = (age) => {
	if (age <= 0) {
		alert('Вы ввели неправильное значение');
	}
	else if (age >= 13) {
		alert('Добро пожаловать!');
	}
	else if (0 < age < 12) {
		alert('Привет, друг!');
	}
}

userAge(age);

// #5

let c = Number(prompt('Введите число'));
let d = Number(prompt('Введите число'));

const productOfNumbers = (c, d) => {
	if (isNaN(c) === false && isNaN(d) === false) {
		console.log(c * d);
	}
	else if (isNaN(c) === true || isNaN(d) === true) {
		console.log('Одно или оба значения не являются числом');
	}
}

productOfNumbers(c, d);

// #6

let m = Number(prompt('Введите любое число'));

const cubeNumber = (m) => {
	if (isNaN(m) === false) {
		let result = m ** 3;
		console.log(`${m} в кубе равняется ${result}`);
	}
	else if (isNaN(m) === true) {
		console.log ('Переданный параметр не является числом');
	}
}

cubeNumber(m);

// #7

function getArea() {
	console.log(`Если R = ${this.radius}, то площадь ${this.radius ** 2 * 3.14}`);
}
function getPerimeter() {
	console.log(`Если R = ${this.radius}, то периметр ${2 * this.radius * 3.14}`);
}

const circle1 = {
	radius: 1,
	getArea: getArea,
	getPerimeter: getPerimeter
}

const circle2 = {
	radius: 2,
	getArea: getArea,
	getPerimeter: getPerimeter
}

circle1.getArea();
circle2.getArea();
circle1.getPerimeter();
circle2.getPerimeter();