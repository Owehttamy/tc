let duration="", chunks="", myres="";
var start_time_input = document.getElementById("start");
var end_time_input = document.getElementById("end");

document.addEventListener("DOMContentLoaded", function() {
    run();
});

start_time_input.addEventListener(
    "input",
    () => {
      run();
    },
    false
);

end_time_input.addEventListener(
    "input",
    () => {
        run();
    },
    false
);

function run() {
    var start = start_time_input.value;
    var end = end_time_input.value;
    duration = calc_minutes(start, end);
    let [chunks, decimal] = calc_chunks(duration).split("|");
    document.getElementById('min').innerHTML = duration;
    document.getElementById('cost').innerHTML = chunks;
    document.getElementById('dec').innerHTML = decimal;
}


function calc_minutes(start, end) {
    let [start_hours, start_minutes] = start.split(":").map(Number);
    let [end_hours, end_minutes] = end.split(":").map(Number);

    let start_total_minutes = start_hours * 60 + start_minutes;
    let end_total_minutes = end_hours * 60 + end_minutes;

    let minutes_difference = end_total_minutes - start_total_minutes;
    return minutes_difference;
}

function calc_chunks(duration) {
    let current = duration - 60;
    let first_hour = "Base + $";
    let count = 0;

    while (current > 14) {
        current -= 15;
        count++;
    }

    if (count > 12) {
        count = 12;
    }

    let total_fifteen = count * 5;
    let dec60 = ((count*15 + 60)/60);
    let output = first_hour.concat(total_fifteen);
    output = output.concat("|", dec60);
    return output;
}