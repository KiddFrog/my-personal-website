const moveButton = document.getElementById('moveButton');
const messageDiv = document.getElementById('message');

const messageText = 'Hello  Flatiron!';
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

    // Apply the random color effect to the letters
    animateRandomColor(element);
}

// Function to animate the sine wave effect
function animateSinWave(element) {
    const amplitude = 40; // Adjust the amplitude of the sine wave
    const frequency = 5; // Adjust the frequency of the sine wave

    function step(timestamp) {
        const verticalOffset = amplitude * Math.sin(frequency * (timestamp / 1000));
        element.style.transform = `translateY(${verticalOffset}px)`;

        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}
/////////////////
function animateRandomColor(element) {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.color = randomColor;
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
