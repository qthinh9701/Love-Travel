const daysText = document.querySelector(".timing .days strong")
const hoursText = document.querySelector(".timing .hours strong")
const minutesText = document.querySelector(".timing .minutes strong")
const secondsText = document.querySelector(".timing .seconds strong")
function countdown(date) {
    // Wed Sep 25 2021 12:53:26 GMT+0700 (Giờ Đông Dương)
    const now = new Date();
    const startDate = now.getTime();
    const endDate = new Date(date).getTime();
    const timeRemaining = (endDate - startDate) /1000;
    let days, hours, minutes, seconds ;
    days
    console.log(timeRemaining)
}
countdown("Wed Sep 25 2021 12:53:26 GMT+0700 (Giờ Đông Dương)");