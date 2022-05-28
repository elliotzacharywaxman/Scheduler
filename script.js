function setTime(){
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(today);
}    
setInterval(setTime, 1000);

{/* <tr>
<td>9:00am</td>
<td><textarea></textarea></td>
<td><button class="saveBtn fa fa-folder"></button></td>
</tr> */}

var tbodyEl = document.getElementsByClassName("bodyOn")
console.log(tbodyEl)


var hours = 18



var renderRows = () => {
    $("bodyOn").html("");
    for (i = 10; i < hours; i++){
        var tableRowContainer = $("<tr>");
        var hourData = $("<td>")
        var eventData = $("<td>")
        var event = $("<textarea>")
        var btnSq = $("<td>")
        var saveBtn = $("<button>")
        
        hourData.text(i)
        hourData.appendTo(tableRowContainer);
        eventData.appendTo(tableRowContainer);
        event.appendTo(eventData);
        btnSq.appendTo(tableRowContainer);
        saveBtn.appendTo(btnSq);

        

        tableRowContainer.appendTo(tbodyEl);
    }
};

renderRows()