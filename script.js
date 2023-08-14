const moveButton = document.getElementById('moveButton');
const messageDiv = document.getElementById('message');

const messageText = 'Hello Flatiron!';
const letters = messageText.split('');

const letterObjects = [];

let currentIndex = 0;

function animateButton() {
    let x = 0;
    let y = 0;
    let xSpeed = 1;
    let ySpeed = 1;

    const frameRate = 60;

    function step() {
        x += xSpeed;
        y += ySpeed;

        if (x + moveButton.clientWidth >= window.innerWidth || x <= 0) {
            xSpeed *= -1;
        }
        if (y + moveButton.clientHeight >= window.innerHeight || y <= 0) {
            ySpeed *= -1;
        }

        moveButton.style.left = x + 'px';
        moveButton.style.top = y + 'px';

        setTimeout(function() {
            requestAnimationFrame(step);
        }, 1000 / frameRate);
    }

    step();
}

animateButton();

moveButton.addEventListener('click', function() {
    revealNextLetter();
});

function applyCustomStyles(element, index) {
    // Apply the sine wave effect to the letters
    animateSinWave(element);

    // Apply the rainbow color effect to the letters
    animateRainbowColor(element, index);
}

function animateSinWave(element) {
    const amplitude = 20;
    const frequency = 0.15;

    function step(timestamp) {
        const verticalOffset = amplitude * Math.sin(frequency * (timestamp / 1000));
        element.style.transform = `translateY(${verticalOffset}px)`;

        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

function animateRainbowColor(element, index) {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const frequency = 0.2;

    function step(timestamp) {
        const colorIndex = Math.floor((timestamp / 1000) * frequency) % colors.length;
        element.style.color = colors[colorIndex];

        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

function revealNextLetter() {
    if (currentIndex < letters.length) {
        const letter = letters[currentIndex].toUpperCase();
        const span = document.createElement('span');
        span.textContent = letter;

        applyCustomStyles(span, currentIndex);

        messageDiv.appendChild(span);
        letterObjects.push(span);

        currentIndex++;
    }
}
