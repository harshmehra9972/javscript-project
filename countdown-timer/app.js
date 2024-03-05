const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let dateChange = new Date(tempYear, tempMonth, tempDay + 30,3,30,0) ;
var year = dateChange.getFullYear();
var hour = dateChange.getHours();
var min = dateChange.getMinutes();
var date = dateChange.getDate();
var weekday = dateChange.getDay();
weekday = weekdays[weekday];
var month = dateChange.getMonth();
month = months[month];
giveaway.textContent = `Giveaway Ends On ${weekday}, ${date}  ${month}, ${year}, ${hour}:${min}am`

function getdates(){
    const today = new Date();
    const time = dateChange - today;
    const onday = 1000*60*60*24;
    const onhours = 1000*60*60;
    const onmin = 1000*60;
// days
    var days = time/onday;
    days = Math.floor(days);
//hours
    var hours = (time%onday)/onhours;
    hours = Math.floor(hours);
//minutes
var minutes = (time%onhours)/onmin;
minutes = Math.floor(minutes);
// second 
var seconds = (time%onmin)/1000;
seconds = Math.floor(seconds);
console.log(seconds);
const values = [days,hours,minutes,seconds];

function format (item) {
    if (items>10){
        return (item= `0 ${items}`);
    }
    else {
        return item;
    }
}
items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
});

if (time < 0) {
    clearInterval(count);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }

}

let count = setInterval(getdates, 1000)


getdates()