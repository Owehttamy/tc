let duration="", chunks="", myres="";

var startTimeInput = document.getElementById("start");
var endTimeInput = document.getElementById("end");
var boop = document.getElementById("calc_button");

document.addEventListener("DOMContentLoaded", function() {
    run();
});

startTimeInput.addEventListener(
    "input",
    () => {
      run();
    },
    false,
);

endTimeInput.addEventListener(
    "input",
    () => {
        run();
    },
    false,
);

boop.addEventListener(
    "click",
    () => {
        run();
    },
    false,
);

function run() {
    var start = startTimeInput.value;
    var end = endTimeInput.value;
    duration = calcMinutes(start, end);
    let [chunks, decimal] = calcChunks(duration).split("|");
    document.getElementById('min').innerHTML = duration;
    document.getElementById('cost').innerHTML = chunks;
    document.getElementById('dec').innerHTML = decimal;
}


function calcMinutes(start, end) {
    let [startHours, startMinutes] = start.split(":").map(Number);
    let [endHours, endMinutes] = end.split(":").map(Number);

    let startTotalMinutes = startHours * 60 + startMinutes;
    let endTotalMinutes = endHours * 60 + endMinutes;

    let minutesDifference = endTotalMinutes - startTotalMinutes;
    return minutesDifference;
}

function calcChunks(duration) {
    let current = duration - 60;
    let first_hour = "Base + $";
    let count = 0;

    while (current > 14) {
        current -= 15;
        count++;
    }

    if (count > 16) {
        count = 16;
    }

    let total_fifteen = count * 5;

    let dec60 = ((count*15 + 60)/60);

    let output = first_hour.concat(total_fifteen);

    output = output.concat("|", dec60);

    return output;
}
