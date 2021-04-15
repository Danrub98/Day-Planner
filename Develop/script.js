var schedule = $('.scheduleText')
var currentDay = $('#currentDay');
var scheduleColor = document.getElementsByClassName ('scheduleText')
const textBox = document.getElementsByClassName("scheduleText");
var saveBtn = document.getElementsByClassName('saveBtn')
var today = new Date();
var hour = today.getHours();
const rows = document.getElementsByClassName('row');

console.log(saveBtn.length)
console.log (textBox)


function displayTime () {
    var actualTime = moment().format('dddd MMMM Do YYYY h:mm');
    currentDay.text(actualTime);
    console.log (actualTime)
}

function colors(){
Array.from(rows).forEach(scheduleText => {
    let
        rowString= scheduleText.id,
        rowHours;
    if(rowString){
        rowHours = parseInt (rowString)
        console.log (rowHours)

    }
    if (rowHours){
        if (hour === rowHours){
            rowsColors (scheduleText, '#865858');
        } else if (hour < rowHours){
            rowsColors (scheduleText, '#bbbbbb');
        } else{
            rowsColors (scheduleText, '#e2d5d5 ')
        }
    }
});
}


// This function makes the color be applied to all the elements in the Schedule variable, 
// so that depending in the string number, and the local time, the color is set.
function rowsColors (element, color){
    element.style.backgroundColor= color;
}
setInterval (colors, 1000); 
setInterval (displayTime, 1000);

function saveInformation(){
    var textWritten = textBox.value;
    localStorage.setItem("textWritten", JSON.stringify(textWritten.value));

}

for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener('click', function(){
        saveInformation ();
        console.log (textBox.value)
    });
}


console.log (hour)


