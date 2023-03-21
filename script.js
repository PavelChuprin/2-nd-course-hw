function firstGame() {
	let monthNumber = Number(prompt('Введите № месяца, чтобы узнать какой сейчас сезон', 'от 1 до 12'));
	if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
		alert('Зима');
		console.log('Зима');
	}
	else if (monthNumber >= 3 && monthNumber <= 5) {
		alert('Весна');
		console.log('Весна');
	}
	else if (monthNumber >= 6 && monthNumber <= 8) {
		alert('Лето');
		console.log('Лето');
	}
	else if (monthNumber >= 9 && monthNumber <= 11) {
		alert('Осень');
		console.log('Осень');
	}
	else if (isNaN(monthNumber) === false) {
		alert('Ошибка! В году всего 12 месяцев!');
		console.log('Ошибка! В году всего 12 месяцев!');
	}
	else {
		alert ('Недопустимое значение');
		console.log('Недопустимое значение');
	}
}

let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
function twoGame() {
	alert(arr = arr.sort(() => Math.random() - 0.5)); // перемешиваем эл-ты массива
	let answer1 = prompt('Какое слово было первым?');
	let answer2 = prompt('Какое слово было последним?');
	if (answer1.toLowerCase() === arr[0].toLowerCase() && answer2.toLowerCase() === arr[arr.length-1].toLowerCase()) {
		alert('Поздравляем, Вы угадали оба слова! :)');
	}
	else if (answer1.toLowerCase() === arr[0].toLowerCase() || answer2.toLowerCase() === arr[arr.length-1].toLowerCase()) {
		alert('Вы были близки к победе! :|');
	}
	else alert('Вы ответили неверно :(')
}