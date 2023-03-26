// #1
const arr = [];

function sum(arr) {
	return Math.round(arr.reduce((a, b) => a + b));
};
function mult(arr) {
	return Math.round(arr.reduce((a, b) => a * b));
};
function getResult(arr, callback) {
	console.log(callback(arr));
};

getResult([3, 4, 1, 9], sum);
getResult([3, 4, 1, 9], mult);

//#2
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function compareFunction(a, b) {
	return a.age - b.age;
};
function getSortedArrayObj() {
	users.sort(compareFunction);
};

getSortedArrayObj(users);
console.log(users);

//#3
const array = [1, '4', 9, 'two'];
const array2 = [1, '4', false, 9, 'two'];

function reversArray() {
	return array.reverse();
};
function toNumberArr() {
	return (array2.map(Number)).filter(item => isNaN(item) === false);
};
function each(callback) {
	console.log(callback());
};

each(reversArray);
each(toNumberArr);

//#4
function timer(deadline) {
	const interval = setInterval(() => {
		console.log(new Date());
	}, 3000);

	setTimeout(() => {
		clearInterval(interval);
		console.log('Время 30 секунд прошло!')
	 }, deadline * 1000)
};

timer(30);

//#5
function calling() {
	console.log('Звоню!')
};
function beeps(callback) {
	setTimeout(() => {
		console.log('Идут гудки...');
		callback();
	}, 1000);
};
function talk() {
	console.log('Разговор')
};

calling();
beeps(talk); // talk вызывается в beeps
