import AbstractView from "./abstract-view.js";
// import {redrawCircle, addLeadingZero, redrawTimer} from "../timer";

export default class TimerView extends AbstractView {
    constructor() {
        super();
        this.timeTotal = 120;
    }

    get template() {
        return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">02</span>
        <span class="timer-value-dots">:</span>
        <span class="timer-value-secs">00</span>
      </div>
    </svg>`;
    }

    postRender() {
        this.drawTimer();
    }
    
    drawTimer() {
       
        if (this.timer === undefined) {
            this.timer = this.element.querySelector(`.timer-value`);
        }

        if (this.circle === undefined) {
            this.circle = this.element.querySelector(`.timer-line`);
        }
        
        if (this.timeLeft === undefined) {
            this.timeLeft = 120;
        }
       
        
        const addLeadingZero = (val) => val < 10 ? `0${val}` : val;
        const redrawCircle = (circle, radius) => {
            const length = 2 * Math.PI * radius;
            const stepLength = length / this.timeTotal;
            const lengthToClear = stepLength * (this.timeTotal - this.timeLeft);
        
            circle.setAttribute(`r`, radius.toString());
            circle.setAttribute(`stroke-dasharray`, length.toString());
            circle.setAttribute(`stroke-dashoffset`, lengthToClear.toString());
        
            return circle;
        };
        
        const redrawTimer = (timer) => {
            timer.querySelector(`.timer-value-mins`).textContent = addLeadingZero(Math.floor(this.timeLeft / 60));
            timer.querySelector(`.timer-value-secs`).textContent = addLeadingZero(this.timeLeft % 60);
        
            return timer;
        };
        redrawTimer(this.timer);
        redrawCircle(this.circle, 370);
       
    }

    updateTimeLeft(timeLeft) {
       
        this.timeLeft = timeLeft;
        this.drawTimer();
        
    }
}
