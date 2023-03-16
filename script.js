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