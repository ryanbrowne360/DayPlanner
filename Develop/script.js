//Setting the current date and time using moment.js

var Day = moment();
var exactTime = moment().format("h:mm a");
var currentDayDisplay = Day.format("[Today is:] dddd, MMMM, Do YYYY");

//Displaying the current date and time in the html

$("#currentDay").text(currentDayDisplay);
$("#currentDay").text(exactTime);


//Setting the colour of the task based on relative time of day

function taskColour() {
    for ( var i=9; i<18; i++) {
        var time = i
        if (time == moment().format('H')) {
            $("#time"+ i).addClass("present").removeClass("past", )
        }
        if (time < moment().format('H')) {
            $("#time"+ i).addClass("past")
        }
        if (time > moment().format('H')) {
            $("#time"+ i).addClass("future")
        }
    }
}
taskColour();

//Saving the users input content about their tasks in local storage

$("#S1").on("click", () => localStorage.text1 = $("#text9").val())
$("#S2").on("click", () => localStorage.text2 = $("#text10").val())
$("#S3").on("click", () => localStorage.text3 = $("#text11").val())
$("#S4").on("click", () => localStorage.text4 = $("#text12").val())
$("#S5").on("click", () => localStorage.text5 = $("#text13").val())
$("#S6").on("click", () => localStorage.text6 = $("#text14").val())
$("#S7").on("click", () => localStorage.text7 = $("#text15").val())
$("#S8").on("click", () => localStorage.text8 = $("#text16").val())
$("#S9").on("click", () => localStorage.text9 = $("#text17").val())


//Display previously closed tasks

    function Saved() {
        for (let i=1; i<11; i++)
        $("#text"+ i).val(localStorage.getItem("text"+ i))
    }
    Saved()




