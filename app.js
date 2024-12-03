//countdown top bar//
const targetDate = new Date("Dec 31,2024,23:59:59").getTime();

const countdown = setInterval(() => {
  let currentDate = new Date().getTime();
  const timeLeft = targetDate - currentDate;
  //Convert time left into units//
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  // Update the HTML elements
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  //If the countdown is finished
  if (timeLeft <= 0) {
    clearInterval(countdown);
  }
}, 1000);
