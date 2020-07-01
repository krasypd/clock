setInterval(setClock, 1000);

const hourHand = document.querySelector('.h');
const minutesHand = document.querySelector('.m');
const secondsHand = document.querySelector('.s');
const digitClock = document.querySelector('.digit');

function setRotation(element, rotationRation) {
	element.style.setProperty('--rotation', rotationRation * 360);
}

function setClock() {
	const currentDate = new Date();

	const secondsRatio = currentDate.getSeconds() / 60;
	const minutesRatio = currentDate.getMinutes() / 60;
	const hourRatio = currentDate.getHours() / 12;

	setRotation(secondsHand, secondsRatio);
	setRotation(minutesHand, minutesRatio);
	setRotation(hourHand, hourRatio);

	digitClock.innerHTML = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}

setClock();
