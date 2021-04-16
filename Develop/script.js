var schedule = $(".scheduleText");
var currentDay = $("#currentDay");
var scheduleColor = document.getElementsByClassName("scheduleText");
const textBox = document.getElementsByClassName("scheduleText");
var saveBtn = document.getElementsByClassName("saveBtn");
var today = new Date();
var hour = today.getHours();
const rows = document.getElementsByClassName("row");
var saveInformation;
if (JSON.parse(localStorage.getItem("textWritten")) === null){
saveinformation = [
    {
      time: 9,
      value: "",
    },
    {
      time: 10,
      value: "",
    },
    {
      time: 11,
      value: "",
    },
    {
      time: 12,
      value: "",
    },
    {
      time: 13,
      value: "",
    },
    {
      time: 14,
      value: "",
    },
    {
      time: 15,
      value: "",
    },
    {
      time: 16,
      value: "",
    },
    {
      time: 17,
      value: "",
    },
    {
      time: 18,
      value: "",
    },
    {
      time: 19,
      value: "",
    },
    {
      time: 20,
      value: "",
    },
    {
      time: 21,
      value: "",
    },
    {
      time: 22,
      value: "",
    },
  ];
} else {
    saveinformation = JSON.parse(localStorage.getItem("textWritten"));
};

console.log(saveBtn.length);
console.log(textBox);
console.log (JSON.parse(localStorage.getItem("textWritten")));

document.getElementById("9").innerHTML = saveinformation[0].value;
document.getElementById("10").innerHTML = saveinformation[1].value;
document.getElementById("11").innerHTML = saveinformation[2].value;
document.getElementById("12").innerHTML = saveinformation[3].value;
document.getElementById("13").innerHTML = saveinformation[4].value;
document.getElementById("14").innerHTML = saveinformation[5].value;
document.getElementById("15").innerHTML = saveinformation[6].value;
document.getElementById("16").innerHTML = saveinformation[7].value;
document.getElementById("17").innerHTML = saveinformation[8].value;
document.getElementById("18").innerHTML = saveinformation[9].value;
document.getElementById("19").innerHTML = saveinformation[10].value;
document.getElementById("20").innerHTML = saveinformation[11].value;
document.getElementById("21").innerHTML = saveinformation[12].value;
document.getElementById("22").innerHTML = saveinformation[13].value;


function displayTime() {
  var actualTime = moment().format("dddd MMMM Do YYYY h:mm");
  currentDay.text(actualTime);
  console.log(actualTime);
}

function colors() {
  Array.from(rows).forEach((scheduleText) => {
    let rowString = scheduleText.id,
      rowHours;
    if (rowString) {
      rowHours = parseInt(rowString);
      console.log(rowHours);
    }
    if (rowHours) {
      if (hour === rowHours) {
        rowsColors(scheduleText, "#91c788");
      } else if (hour < rowHours) {
        rowsColors(scheduleText, "#c64756");
      } else {
        rowsColors(scheduleText, "#d8e3e7 ");
      }
    }
  });
}

// This function makes the color be applied to all the elements in the Schedule variable,
// so that depending in the string number, and the local time, the color is set.
function rowsColors(element, color) {
  element.style.backgroundColor = color;
}
setInterval(colors, 1000);
setInterval(displayTime, 1000);

var saveinformation = [
  {
    time: 9,
    value: "",
  },
  {
    time: 10,
    value: "",
  },
  {
    time: 11,
    value: "",
  },
  {
    time: 12,
    value: "",
  },
  {
    time: 13,
    value: "",
  },
  {
    time: 14,
    value: "",
  },
  {
    time: 15,
    value: "",
  },
  {
    time: 16,
    value: "",
  },
  {
    time: 17,
    value: "",
  },
  {
    time: 18,
    value: "",
  },
  {
    time: 19,
    value: "",
  },
  {
    time: 20,
    value: "",
  },
  {
    time: 21,
    value: "",
  },
  {
    time: 22,
    value: "",
  },
];

function saveInformation(event) {
  console.log(event.target.previousElementSibling.innerHTML);
  var textWritten = event.target.previousElementSibling.innerHTML;
  console.log(event.target.previousElementSibling.getAttribute("id"));
  var elementId = parseInt(event.target.previousElementSibling.getAttribute("id"));
  for (var i = 0; i< saveinformation.length; i++) {
    if (saveinformation[i].time === elementId) {
        saveinformation [i].value = textWritten
    }
  }
  localStorage.setItem("textWritten", JSON.stringify(saveinformation));
}

for (var i = 0; i < saveBtn.length; i++) {
  saveBtn[i].addEventListener("click", function (event) {
    saveInformation(event);
    console.log(textBox.value);
  });
}

console.log(hour);
