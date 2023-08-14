const moveButton = document.getElementById('moveButton');
const messageDiv = document.getElementById('message');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const messageText = 'Hello Flatiron!';
const letters = messageText.split('');

function generateRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

let currentIndex = 0;

function animateButton() {
    let x = 0; // Initial horizontal position
    let y = 0; // Initial vertical position
    let xSpeed = 1; // Slower horizontal speed
    let ySpeed = 1; // Slower vertical speed

    const frameRate = 60; // Adjust the frame rate

    function step() {
        // Update the button's position
        x += xSpeed;
        y += ySpeed;

        // Check for collisions with the screen edges
        if (x + moveButton.clientWidth >= window.innerWidth || x <= 0) {
            xSpeed *= -1; // Reverse horizontal direction
        }
        if (y + moveButton.clientHeight >= window.innerHeight || y <= 0) {
            ySpeed *= -1; // Reverse vertical direction
        }

        // Apply the new position to the button
        moveButton.style.left = x + 'px';
        moveButton.style.top = y + 'px';

        // Request the next animation frame with the adjusted frame rate
        setTimeout(function() {
            requestAnimationFrame(step);
        }, 1000 / frameRate);
    }

    // Start the animation loop
    step();
}

// Call the animateButton function to start the animation loop
animateButton();

moveButton.addEventListener('click', function() {
    revealNextLetter();
});

function revealNextLetter() {
    if (currentIndex < letters.length) {
        const letter = letters[currentIndex];
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.color = generateRandomColor();

        messageDiv.appendChild(span);

        currentIndex++;
    }
}
