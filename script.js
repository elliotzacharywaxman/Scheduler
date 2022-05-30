function setTime(){
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(today);
}    
setInterval(setTime, 1000);

var tbodyEl = document.getElementsByClassName("bodyOn")
console.log(tbodyEl)


var hours = 18



var renderRows = () => {
    var momentHour = moment().hours()
    console.log(momentHour)
    $("bodyOn").html("");
    for (i = 9; i < hours; i++){
        var hourDisplay = ""
        if (i<12){
            hourDisplay = i+":00am"
        } else if (i === 12){
            hourDisplay = i+":00pm"
        } else {
            hourDisplay = i -12 +":00pm"
        }
        var colorKey = "";
        if (i<momentHour){
            colorKey = "past"
        } else if (i === momentHour){
            colorKey = "present"
        } else {
            colorKey = "future"
        }
        var tableRowContainer = $("<tr>");
        tableRowContainer.attr("id",i)
        var hourData = $("<td>").addClass(colorKey)
        var eventData = $("<td>").addClass("event")
        var event = $("<textarea>").val(localStorage.getItem(i))
        var btnSq = $("<td>")
        var saveBtn = $("<button>").addClass("saveBtn").addClass("fa fa-folder fa-lg")
        saveBtn.on("click", function (){
            var hourKey = $(this).parent().parent().attr('id');
            console.log(hourKey)
            var activity = $(this).parent().siblings(".event").children().val()
            localStorage.setItem(hourKey, activity)
        })
        



        hourData.text(hourDisplay)
        hourData.appendTo(tableRowContainer);
        eventData.appendTo(tableRowContainer);
        event.appendTo(eventData);
        btnSq.appendTo(tableRowContainer);
        saveBtn.appendTo(btnSq);
        

        

        tableRowContainer.appendTo(tbodyEl);
    }
};

renderRows()