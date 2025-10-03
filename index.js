let timer; // to store setInterval reference
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

// Get display spans
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Get buttons
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Start button
startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 1000);
  }
});

// Stop button
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

// Reset button
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
});

// Update time function
function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

// Function to update UI
function updateDisplay() {
  hoursEl.textContent = String(hours).padStart(2, "0") + ":";
  minutesEl.textContent = String(minutes).padStart(2, "0") + ":";
  secondsEl.textContent = String(seconds).padStart(2, "0");
}