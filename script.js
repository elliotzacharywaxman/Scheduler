// var currentDay = document.getElementById("currentDay")
// var currentDay = $("#currentDay")
// currentDay.text(getDay(time))

// function getDay(time) {
//     time = moment().format("MMM Do YY"); 
//     return time;
// }

// setInterval(getDay,1000)

function setTime(){
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(today);
}    

setInterval(setTime, 1000);