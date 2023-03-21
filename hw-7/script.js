//#1
let str = 'js';
console.log(str.toUpperCase()); 
// преобразуем строку в верхний регистр toUpperCase (нижний - toLowerCase)

//#2
const arr = ['Кошка', 'Кит', 'Комар', 'Носорог'];
let search = 'ко';
arr.forEach((item) => { 
	if (item.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(item);
	}
})
// в массие arr пров-ем кажд. эл-т item на наличие подстроки search в начале назв-я
// приводим эл-т item и искомую подстроку search к одному регистру

// #3
let number = 32.58884;
console.log(Math.floor(number)); // округл-е до меньшего целого
console.log(Math.ceil(number)); // округл-е до большего целого
console.log(Math.round(number)); // округл-е до ближайш. целого

//#4
console.log(Math.min(52, 53, 49, 77, 21, 32)); //  возв-ет наимен-ее из нуля или более ч-л
console.log(Math.max(52, 53, 49, 77, 21, 32)); //  возв-ет наибол-ее из нуля или более ч-л

// #5
function getRandomArbitrary(minValue, maxValue) {
	return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}
console.log(getRandomArbitrary(1, 10));
// ф-ция, которая выводит в консоль рандомное число от 1 до 10

// #6
const randomArbitrary = [];
function getRandomArrNumbers (value) {
	for (i = 0; i < Math.floor(value / 2); i++) { 
	// цикл для созд-я рандом. массива от 0 до value с длиной массива Math.floor(value / 2)
	randomArbitrary[i] = Math.floor(Math.random() * value);
	// Math.floor(Math.random() * (max - min) + min), где min = 0
	}
}
getRandomArrNumbers(15);
console.log(randomArbitrary);

//#7
function numberRange(a, b) { // ф-ция принимает 2 случ. ч-ла
	return Math.round(Math.random() * (b - a) + a); // возв-ет случ. целое число в диап-не этих 2-ух ч-л
}
console.log(numberRange(30, -15));

// #8
let now = new Date(); // объект будет указ-ть текущ. дату компьютера
console.log(now);

//#9
let currentDate = new Date(); // создаем перем-ую, которая хранит текущ. дату
console.log('Текущая дата: ' + currentDate);
let daysLater73 = currentDate.setDate(currentDate.getDate() + 73); 
// соз-ем перем-ую для хран-я новой даты = устан-ем новую дату(выз-ем текущ. день и приб-ем 73 дня)
console.log('Через 73 дня: ' + new Date(daysLater73)); // выз-ем новую дату зависящую от новой перем-ой daysLater73

//#10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date(); // получаем текущую дату
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " 
+ myDate.getFullYear() + " - это " + days[myDate.getDay()] + 
" Время: " + myDate.getHours() + ":" + (myDate.getMinutes() < 10 ? "0" : "") + myDate.getMinutes() 
+ ":" + (myDate.getSeconds() < 10 ? "0" : "") + myDate.getSeconds();

console.log(fullDate); // Дата: 21 Март 2023 - это Вторник Время: 18:04:01

// #11* (для сайта игр)
let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
function twoGame() {
	alert(array = array.sort(() => Math.random() - 0.5)); // перемешиваем эл-ты массива
	let answer1 = prompt('Какое слово было первым?');
	let answer2 = prompt('Какое слово было последним?');
	if (answer1.toLowerCase() === array[0].toLowerCase() && answer2.toLowerCase() === array[array.length-1].toLowerCase()) {
		alert('Поздравляем, Вы угадали оба слова! :)');
	}
	else if (answer1.toLowerCase() === array[0].toLowerCase() || answer2.toLowerCase() === array[array.length-1].toLowerCase()) {
		alert('Вы были близки к победе! :|');
	}
	else alert('Вы ответили неверно :(')
}

twoGame(array);
