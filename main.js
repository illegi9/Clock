function clock() {
let date = new Date();

let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let dayName = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
let dayNames = dayName[day]

if (hours < 10) {
    hours = '0' + hours};

if (minutes < 10) {
    minutes = '0' + minutes}; 

if (seconds < 10) {
    seconds = '0' + seconds};
    document.getElementById('day').innerHTML = dayNames;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

setInterval(clock, 1000);