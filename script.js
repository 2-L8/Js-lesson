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


/*
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




arr = ['Пн','Вт','Ср'];
alert(arr[0]);



var obj = {1 :' Понедельник', 2 : 'Вторник', 3 : 'Среда'};
alert(obj[3]);

*/

/*
lang = prompt ('На какой языке вы разговариваете?');
switch (lang){
	case('RU');
		alert('Русский');
	break;
	
	case ('EN');
		alert('Английский');
	break;
	
	case ('UK');
		alert('Украинский');
	break;
	default:
		alert('Извините, произошло недарузумение. Мы пишем на языках RU и EN');

}*/



/*
x = prompt('Введите число')
x = Number (x)

if (x>0 && x<15){
	alert('Число в первой четверти');
}
if (x>14 && x<31){
	alert('Число во второй четверти');
}
if (x>29 && x<46){
	alert('Число в третьей четверти');
}
if (x>44 && x <60){
	alert('Число в четвертой четверти');
}

*/
/*

var lang = 'ru';
if (lang == 'ru') {
	var arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];                   
}
if (lang == 'en') {
	arr = ['Mn', 'Ts', 'Wd', 'Th', 'Fr', 'St', 'Sn'];
}
alert(arr);




var lang = 'ru';
switch (lang) {
	case 'ru':
		var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	break;
	case 'en':
		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
	break;
		default:
			alert('Ваш язык не подходит к этому сайту');
}
alert(arr);


function RuEnWeek() {
	lan = prompt ('Введите язык');
	
	var arr = {
		'ru':['Пн','Вт','Ср','Чт','Пт','Ср','Вс'],
		'en':['Mn','Ts','We','Th','Fr','St','Sn']
	};
	alert(arr[lan]);
}
*/


function confirr(){
	result = confirm('Вы студент?');
	
	if (result == true){
		alert('У нас для вас отличное предложение!!');
	}else{
		alert('Ничем не можем вам помочь(');
	};
};


function PrintInt(){
	col = prompt('Сколько чисел вывести?');
	col = Number(col);
	var i = 1;
	while (i <= col){
		document.write(i + '<br>');
		i++;
	};
};


/*Домашнее задание*/

function result(){
	var result = 1;
	var arr = [2, 3, 4, 5, ];
	for (var i = 0; i < arr.length; i++) {
	result = result * arr[i];
	};
alert(result);
};



function write(){
	var arr = [1, 2, 3, 4, 5];
	for (var i = 0; i <= arr.length(); i++){
		document.write(arr[i] + '<br>');
	};
};




