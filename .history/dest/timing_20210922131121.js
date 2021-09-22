const daysText = document.querySelector(".timing .days strong");
const hoursText = document.querySelector(".timing .hours strong");
const minutesText = document.querySelector(".timing .minutes strong");
const secondsText = document.querySelector(".timing .seconds strong");
function countdown(date) {
  // Wed Sep 25 2021 12:53:26 GMT+0700 (Giờ Đông Dương)
  const now = new Date();
  const startDate = now.getTime();
  const endDate = new Date(date).getTime();
  let timeRemaining = parseInt((endDate - startDate) / 1000);
  let days, hours, minutes, seconds;
  days = parseInt(timeRemaining / 86400);
  timeRemaining = timeRemaining % 86400;
  hours = parseInt(timeRemaining / 3600);
  timeRemaining = (timeRemaining % 3600);
  minutes = parseInt(timeRemaining /60)
  timeRemaining = timeRemaining % 60 ;
  seconds = parseInt(timeRemaining)
  console.log(seconds);
  daysText.textContent = days;
  hoursText.textContent = hours;
  minutesText.textContent = minutes;
  minutesText.textContent = minutes;

}
countdown("Wed Sep 30 2021 12:53:26 GMT+0700 (Giờ Đông Dương)");
