let normal = document.querySelector("#normal");
let throttled = document.querySelector("#throttled");

document.querySelector("#entry").addEventListener("input", handleChange);

function handleChange(e) {
    normal.textContent = e.target.value;
    updateThrottleText(e.target.value);
}

const updateThrottleText = throttle((text) => {
    throttled.textContent = text;
});

function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs = null;
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }
        cb(...args);
        shouldWait = true;
        setTimeout(() => {
            if (waitingArgs != null) {
                cb(...waitingArgs);
                waitingArgs = null;
            }
            shouldWait = false;
        }, delay);
    }
}