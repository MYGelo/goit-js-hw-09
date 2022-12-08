function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const mainEl = document.querySelector('body');
const controlEl = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
controlEl.stopBtn.disabled = true;
console.log(controlEl);

let timeId = null;

controlEl.startBtn.addEventListener('click', onClickStart);
controlEl.stopBtn.addEventListener('click', onClickStop);

function onClickStart(e) {
  timeId = setInterval(() => {
    mainEl.style.background = getRandomHexColor();
  }, 500);
  controlEl.startBtn.disabled = true;
  controlEl.stopBtn.disabled = false;
  // controlEl.stopBtn.classList.remove('btn_margin-left');
}
// function onClickStop(e) {
//   clearInterval(timeId);
//   controlEl.stopBtn.disabled = true;
//   controlEl.startBtn.disabled = false;
// }

console.log(controlEl);

function onClickStop(e) {
  // if ('click') {
  //   controlEl.stopBtn.classList.add('btn_margin-left');
  //   // mainEl.style.backgroundColor = 000;
  //   console.log('12345');
  // }

  clearInterval(timeId);
  controlEl.stopBtn.disabled = true;
  controlEl.startBtn.disabled = false;
}
