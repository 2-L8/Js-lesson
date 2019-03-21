/*
namber = Math.floor(Math.random() * 10);
alert (namber);

x = prompt('Угадай число от 1 до 10');
x = Number (x);

if (x == namber){
	alert('Вы выиграли!');
}
else{
	alert('Неудача, испытайте удачу ещё раз!');
}
*/

a = prompt('Введите первое число')
b = prompt('Введите второе число')

a = Number(a);
b = Number(b);

function SUM(a,b) {
	var a,b,sum;
	sum = a + b;
	alert(String(sum));
}

function SUB(a,b) {
	var a,b,sub;
	sub = a - b;
	alert(String(sub));
}

function MULT(a,b) {
	var a,b,mylt;
	mylt = a * b;
	alert(String(mylt));
}

function DIV(a,b) {
	var a,b,div;
	div = a / b;
	alert(String(div));
}
