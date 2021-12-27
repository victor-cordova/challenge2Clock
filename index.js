const clockFrame = document.getElementById("clockFrame");
const clockHandSecond = document.getElementById("clockHandSecond");
const clockHandMinute = document.getElementById("clockHandMinute");
const clockHandHour = document.getElementById("clockHandHour");

const date = new Date();

const second = date.getSeconds();
const minute = date.getMinutes();
const hour = date.getHours();

const hourGap = (minute*(360/12))/60;

clockHandSecond.style.cssText = `transform: rotate(${(second * 360) / 60}deg);`;
clockHandMinute.style.cssText = `transform: rotate(${(minute * 360) / 60}deg);`;
clockHandHour.style.cssText = `transform: rotate(${(hour * 360) / 12 + hourGap }deg);`;


setInterval( () => {
    const date = new Date();
    const second = date.getSeconds();
    const minute = date.getMinutes();

    const hourGap = (minute*(360/12))/60;

    clockHandSecond.style.cssText = `transform: rotate(${(second * 360) / 60}deg);`;
    clockHandMinute.style.cssText = `transform: rotate(${(minute * 360) / 60}deg);`;
    clockHandHour.style.cssText = `transform: rotate(${(hour * 360) / 12 + hourGap}deg);`;
}, 1000);