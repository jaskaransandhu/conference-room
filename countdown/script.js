const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newyears = "16 nov 2021";
function countdown(){
const newyearsDate = new Date(newyears);
const currentDate  = new Date();
const totalseconds = (newyearsDate-currentDate)/1000;


const days = Math.floor(totalseconds/3600/24);
const hours = Math.floor(totalseconds/3600)%24;
const minutes = Math.floor(totalseconds/60)%60;
const seconds = Math.floor(totalseconds%60);




daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minutesEl.innerHTML = minutes;
secondsEl.innerHTML = seconds
}
countdown();
setInterval(countdown,1000);