// #1
const taskOne = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < taskOne.length; i++) { // запускаем цикл for
	console.log(taskOne[i]); // выводим эл-ты массива, пока не встретим знач-е 10
	if (taskOne[i] == 10) break; // после вывода знач-я 10 в консоль цикл прекращ-ся
}

// #2
const taskTwo = taskOne.slice(); // полностью копируем массив из задания №1, т.к. они идентичны
taskTwo.forEach((el, index) => { // с пом. м-да forEach перебираем массив
	if (el == 4) // + используем стрелочную ф-цию для поиска данного объекта
	console.log(`Число ${el} имеет позицию(индекс) : ${index}`);
});

// #3
const taskThree = [1, 3, 5, 10, 20];
console.log(taskThree.join(' ')); //преобразуем массив в строку и выводим эл-ты ч/з ' '.

// #4
const taskFour = [1, 1, 1];
const taskFourNew = [taskFour, taskFour, taskFour];
console.log(taskFourNew);

// #5
const taskFive = taskFour.slice(); //копируем массив из прошлого задания
taskFive.push(2, 2, 2); //добавляем эл-ты в конец массива
console.log(taskFive);

// #6
const taskSix = [9, 8, 7, 'a', 2, 5];
taskSix.sort(); //сортируем эл-ты в массиве
taskSix.pop(); // удаляем последний эл-т
console.log(taskSix);

// #7
const taskSeven = [9, 8, 7, 6, 5];
let search = taskSeven.includes(Number(prompt('Введите число от 1 до 10'))); // includes проверка наличия эл-та в массиве
console.log(search); // выведет false или true

// #8
let taskEight = 'abcdef';
taskEightNew = taskEight.split(''); // преобразуем строку в массив
taskEightNew.reverse(); // меняем порядок эл-тов в массиве на обратный
console.log(taskEightNew.join('')); // преобразуем массив в строку
// console.log(String(taskEightNew)); // тоже преобразуем массив в строку, НО выводит эл-ты ч/з ","

// #9
const taskNine = [[1, 2, 3,],[4, 5, 6]];
taskNineNew = taskNine.join(',');
console.log(taskNineNew.split(','));

// #10
const taskTen = [5, 4, 8, 2, 3, 1, 7];
for (let i = 0; i < taskTen.length - 1; i++) { // перебираем массив с пом. цикла for
	let sum = taskTen[i] + (taskTen[i + 1]) // сумма текущего и следующего элементов массива
	console.log(sum);
}

// #11
const taskEleven = [1, 2, 3, 4, 5];
let taskElevenNew = taskEleven.map(item => item ** 2) // ф-ция принимает на вход массив целых чисел, а возв-ет массив квадратов этих чисел
console.log(taskElevenNew);

// #12
const taskTwelve = ['ночь', 'улица', 'фонарь', 'аптека'];
let taskTwelveNew = taskTwelve.map((item) => item.length); // ф-ция, прин-ет на вход массив строк, а возв-ет массив длины слов
console.log(taskTwelveNew);

//#13
const taskThirteen = [1, 2, 3, 4, 5, 6];
let taskThirteenNew = taskThirteen.map(item => -item); // ф-цию, прин-ет на вход массив целых чисел, а возв-ет массив с отриц. знач-ями.
console.log(taskThirteenNew);

//#14*
const taskFourteen = [];
for(i = 0; i < 10; i++) { // цикл для создания рандомного массива от 0 до 10 с длиной массива 10
	taskFourteen[i] = Math.floor( Math.random() * 10 );
}
const taskFourteenNew = taskFourteen.filter(item => item % 2 === 0);
console.log(taskFourteen);
console.log(taskFourteenNew);

//#15*
const taskFifteen = [];
for(i = 0; i < 6; i++) { // цикл для создания рандомного массива от 1 до 10 с длиной массива 6
	taskFifteen[i] = Math.floor( Math.random() * 9 + 1); // Math.random() * (max - min) + min;
}
const taskFifteenSum = taskFifteen.reduce(function (previolusValue, item) {
	return item + previolusValue; // находим сумму всех значений массива, начиная с индекса 0
}, 0);
let average = taskFifteenSum / taskFifteen.length;

console.log(average);

