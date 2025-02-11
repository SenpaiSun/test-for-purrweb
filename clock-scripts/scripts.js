// get arrows
const arrowSecond = document.querySelector('.clock__ticks-arrow-sec')
const arrowMinute = document.querySelector('.clock__ticks-arrow-minute')
const arrowHour = document.querySelector('.clock__ticks-arrow-hour')
// create function for update clock
function updateClock() {
  const date = new Date()
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  const secondsDeg = 6 * seconds
  const minutesDeg = 6 * minutes + 0.1 * seconds
  const hoursDeg = 30 * (hours % 12) + 0.5 * minutes
  console.log(seconds, minutes, hours)
  arrowHour.style.transform = `rotate(${hoursDeg}deg)`
  arrowMinute.style.transform = `rotate(${minutesDeg}deg)`
  arrowSecond.style.transform = `rotate(${secondsDeg}deg)`
}

updateClock()

setInterval(updateClock, 1000)