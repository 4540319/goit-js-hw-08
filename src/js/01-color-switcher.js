const startButtonRef = document.querySelector('[data-start]');
const stopButtonRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
const buttonsRef = document.querySelectorAll('[type="button"]');

buttonsRef.forEach(button => {
    button.style = 'margin: 10px; padding: 12px 24px; border-radius: 12px; font-size: 20px';
});

let intervalId = null;
stopButtonRef.disabled = true;

function onStartButtonClick (event) {
    event.target.disabled = true;
    stopButtonRef.disabled = false;
        intervalId = setInterval(() => {
        bodyRef.style = `background-color: ${getRandomHexColor()}`;
    }, 1000);
};

function onStopButtonClick(event) {
    event.target.disabled = true;
    startButtonRef.disabled = false;
    clearInterval(intervalId);
};

startButtonRef.addEventListener('click', onStartButtonClick);
stopButtonRef.addEventListener('click', onStopButtonClick);

function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }