CountDownTimer('12/25/2020', 'countdown'); // 2020년 12월 25일까지
CountDownTimer('12/25/2020 00:00 AM', 'newcountdown'); // 2020년 12월 25일까지, 시간을 표시하려면 01:00 AM과 같은 형식을 사용합니다.

function CountDownTimer(dt, id)
{
var end = new Date(dt);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
var now = new Date();
var distance = end - now;
if (distance < 0) {

clearInterval(timer);
document.getElementById(id).innerHTML = 'EXPIRED!';

return;
}
var days = Math.floor(distance / _day);
var hours = Math.floor((distance % _day) / _hour);
var minutes = Math.floor((distance % _hour) / _minute);
var seconds = Math.floor((distance % _minute) / _second);

document.getElementById(id).innerHTML = days + '일 ';
document.getElementById(id).innerHTML += hours + '시간 ';
document.getElementById(id).innerHTML += minutes + '분 ';
document.getElementById(id).innerHTML += seconds + '초';
}

timer = setInterval(showRemaining, 1000);
}
// Source: stackoverflow