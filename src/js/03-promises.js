import Notiflix from 'notiflix';

const buttonSubmit = document.querySelector('button');

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

buttonSubmit.addEventListener('click', onClick);

async function onClick(e) {
  e.preventDefault();

  let firstDelay = Number(refs.delay.value);
  let delayStep = Number(refs.step.value);

  for (let i = 0; i < refs.amount.value; i++) {
    await createPromise(i + 1, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelay += delayStep;
  }
}
