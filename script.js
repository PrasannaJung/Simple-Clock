const hoursDiv = document.getElementById('hours');
const minutesDiv = document.getElementById('mins');
const secondsDiv = document.getElementById('secs');

setInterval(() => {
  const now = new Date();
  hoursDiv.textContent = String(now.getHours()).padStart(2, 0);
  minutesDiv.textContent = String(now.getMinutes()).padStart(2, 0);
  secondsDiv.textContent = String(now.getSeconds()).padStart(2, 0);
}, 1000);
