// #1
for (let a = 0; a < 2; a++) {
	console.log('Привет');
}

// #2
for (let b = 1; b < 6; b++) {
	console.log(b);
}

// #3
for (let c = 7; c < 23; c++) {
	console.log(c);
}

// #4
const obj = {
	'Коля': 200,
	'Вася': 300,
	'Петя': 400
}
for (let name in obj) {
	alert(`${name} — зарплата ${obj[name]} долларов.`);
}

// #5
let n = 1000;
let num = 0;
do {
	n /= 2;
	num++
	console.log(n);
} while (n > 50);
console.log(`Цикл повторился ${num} раз(а)`);

// #6
let firstFriday = 3; //число в месяце попавшее на первую пятницу
do {
	alert (`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`);
	firstFriday+=7;
} while (firstFriday <= 31);