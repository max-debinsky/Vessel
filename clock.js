var timeDisplay = document.getElementById("time");

function refreshTime() {
  var dateString = new Date().toLocaleString("pl-PL", {
    timeZone: "Europe/Warsaw",
  });
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = "UTC+2 - " + formattedString;
}

setInterval(refreshTime, 1000);
