// Function to calculate minutes between two times
function calcMinutes(start, end) {
    // Splitting hours and minutes from the input strings
    let [startHours, startMinutes] = start.split(":").map(Number);
    let [endHours, endMinutes] = end.split(":").map(Number);

    // Fix AM/PM issue
    if (endHours < startHours) {
        endHours += 12;
    }

    // Calculating the total minutes for start and end times
    let startTotalMinutes = startHours * 60 + startMinutes;
    let endTotalMinutes = endHours * 60 + endMinutes;


    // Calculating the difference in minutes
    let minutesDifference = endTotalMinutes - startTotalMinutes;

    return minutesDifference;
}

// Function to calculate additional price
function calcChunks(duration) {
    let current = duration - 60;
    let first_hour = "Base + $";
    let count = 0;

    while (current > 14) {
        current -= 15;
        count++;
    }

    let total_fifteen = count * 5;

    let dec60 = ((count*15 + 60)/60);

    let output = first_hour.concat(total_fifteen);

    output = output.concat(" | ", dec60);

    return output;
}

// Result Formation
function express(duration, chunks) {
    let res;
    res = duration + " | " + chunks;
    return res.toString();
}

let duration="", chunks="", myres="";
document.getElementById('btnEql').onclick = function() {
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    // Calling the calcMinutes function and displaying the result
    duration = calcMinutes(start, end);
    chunks = calcChunks(duration);
    myres = express(duration, chunks);
    document.getElementById('res').innerHTML = myres;
}

function showex() {
    document.getElementById('res').innerHTML = duration+chunks;
}


document.getElementById('btnClr').onclick = function() {
    myres = "";
    duration = "";
    chunks = "";
    document.getElementById('res').innerHTML = myres;
}