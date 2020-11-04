var now = moment();

var currentDayDisplay = now.format("[Today is:] dddd, MMMM, Do YYYY");

$("#currentDay").text(currentDayDisplay);

var currentHour = now.hours();

var agendaItems = [];

var nine = now.hour(9).format("hA");
$("#slot-9").text(nine);
var ten = now.hour(10).format("hA");
$("#slot-10").text(ten);
var eleven = now.hour(11).format("hA");
$("#slot-11").text(eleven);
var twelve = now.hour(12).format("hA");
$("#slot-12").text(twelve);
var one = now.hour(13).format("hA");
$("#slot-13").text(one);
var two = now.hour(14).format("hA");
$("#slot-14").text(two);
var three = now.hour(15).format("hA");
$("#slot-15").text(three);
var four = now.hour(16).format("hA");
$("#slot-16").text(four);
var five = now.hour(17).format("hA");
$("#slot-17").text(five);

initializeAgenda();

function initializeAgenda() {

    $("div .hour").each(function () {
        var hourChoices = parseInt($(this).attr("id").split("-")[1]);
        if (hourChoices < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present", "future");
        } else if (hourChoices === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past", "future");
        } else {
            $(this).addClass("future");
            $(this).removeClass("past", "present");
        };
    })

    var storedAgendaItems = JSON.parse(localStorage.getItem("agendaItems"));

    if (storedAgendaItems !== "") {
        agendaItems = storedAgendaItems;
    };
};

function agendaSet(event) {
    console.log("I am being clicked!")
    event.preventDefault();

    var textEl = $("<p>");
    textEl.text(inputAgenda);
    $(".agenda-text").append(textEl);

    if (inputAgenda !== "") {
        for (var i = 0; i < agendaItems.length; i++) {
            var inputAgenda = $(".agenda").val();

            agendaItems.push(inputAgenda);

            localStorage.setItem("agendaItems", JSON.stringify(agendaItems));
            $(".agenda-text").text(agendaItems);
            $(".agenda-text").html(agendaItems[i]);
            console.log("agendaitems: ", agendaitems)
        }
    } else return;
};

$("button").on("click", agendaSet);



