function showTime() {
    // Variables
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm = "PM";

    // Set AM/PM depending on the hour value.
    if (hour > 12){
        hour -= 12;
        am_pm = "PM";
    }

    if (hour == 0) {
        hour = 12;
        am_pm = "AM"
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    let currentTime = hour + ":" + minute + ":" + seconds + " " + am_pm;

    let clock = document.getElementById('clock-display')
    clock.innerHTML = currentTime;

    setTimeout(showTime, 1000);
}

showTime();
