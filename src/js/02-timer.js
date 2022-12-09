// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const timerEl = document.querySelector('.timer');
const timer__displayEl = document.querySelector('.timer__display');
const timerSecondsEl = document.querySelector('.field__seconds');
const timerMinutesEl = document.querySelector('.field__minutes');
const timerHoursEl = document.querySelector('.field__hours');
const timerDaysEl = document.querySelector('.field__days');
const inputDateEl = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const eventDate = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(inputDateEl, options);

inputDateEl.addEventListener('click', () => {
  timerEl.style.color = 'black';
  timerDaysEl.style.color = 'black';
  timerHoursEl.style.color = 'black';
  timerMinutesEl.style.color = 'black';
  timerSecondsEl.style.color = 'black';
});

// inputDateEl.addEventListener('click', () => {
//   timerEl.style.color,
//     timerDaysEl.style.color,
//     timerHoursEl.style.color,
//     timerMinutesEl.style.color,
//     (timerSecondsEl.style.color = 'black');
// });

startBtn.addEventListener('click', () => {
  let timer = setInterval(() => {
    let countdown = new Date(inputDateEl.value) - new Date();
    // console.log(countdown);
    startBtn.disabled = true;
    timerEl.style.color = 'black';
    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      eventDate.days.textContent = addLeadingZero(timeObject.days);
      eventDate.hours.textContent = addLeadingZero(timeObject.hours);
      eventDate.minutes.textContent = addLeadingZero(timeObject.minutes);
      eventDate.seconds.textContent = addLeadingZero(timeObject.seconds);
      if (countdown <= 86400000) {
        timerDaysEl.style.color = 'red';
      }
      if (countdown <= 3600000) {
        timerHoursEl.style.color = 'red';
      }
      if (countdown <= 60000) {
        timerMinutesEl.style.color = 'red';
      }
      if (countdown <= 60000) {
        timerSecondsEl.style.color = 'orange';
      }
    } else {
      timerEl.style.color = 'red';
      timerSecondsEl.style.color = 'red';
      Notiflix.Notify.success('Please choose a new date');
      clearInterval(timer);
    }
  }, 1000);
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  1;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
//test js.css
timerEl.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  width: 266px;

  margin: auto;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
 
`;
timer__displayEl.style.cssText = `
display: flex;
margin-bottom: 5px;
`;
