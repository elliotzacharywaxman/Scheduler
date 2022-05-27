function setTime(){
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(today);
}    
setInterval(setTime, 1000);

hours