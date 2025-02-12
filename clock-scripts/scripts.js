// get containers
const hoursContainer = document.querySelector('.clock__ticks-hours')
const minutesContainer = document.querySelector('.clock__ticks-minutes')
// get arrows
const arrowSecond = document.querySelector('.clock__ticks-arrow-sec')
const arrowMinute = document.querySelector('.clock__ticks-arrow-minute')
const arrowHour = document.querySelector('.clock__ticks-arrow-hour')
// get buttons
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const statusClock = document.querySelector('.buttons__status')

// let for interval
let interval

// create hours ticks
for (let i = 0; i < 12; i++) {
  const hourTick = document.createElement('li')
  hourTick.classList.add('clock__ticks-hour')
  hoursContainer.appendChild(hourTick)
}

// create minutes ticks
for (let i = 0; i < 60; i++) {
  const minuteTick = document.createElement('li')
  minuteTick.classList.add('clock__ticks-minute')
  minutesContainer.appendChild(minuteTick)
}

// create function for update clock
function updateClock() {
  const date = new Date()
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  const secondsDeg = 6 * seconds
  const minutesDeg = 6 * minutes + 0.1 * seconds
  const hoursDeg = 30 * (hours % 12) + 0.5 * minutes

  arrowHour.style.transform = `rotate(${hoursDeg}deg)`
  arrowMinute.style.transform = `rotate(${minutesDeg}deg)`
  arrowSecond.style.transform = `rotate(${secondsDeg}deg)`
}

updateClock()

startButton.addEventListener('click', () => {
  if (!interval) {
    interval = setInterval(updateClock, 1000)
    statusClock.style.backgroundImage = 'url(../clock-static/play.svg)'
  }
})

pauseButton.addEventListener('click', () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    statusClock.style.backgroundImage = 'url(../clock-static/pause.svg)'
  }
})
