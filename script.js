const moveButton = document.getElementById('moveButton');
const messageDiv = document.getElementById('message');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const messageText = 'Hello Flatiron!';

const letterObjects = []; // Array to store individual letter objects

let currentIndex = 0; // Track the current index of the message
let buttonDirection = 1; // Direction of the button movement (1 or -1)
let buttonSpeed = 1; // Speed of the button movement

function animateButton() {
    let x = Math.random() * (window.innerWidth - moveButton.clientWidth); // Random initial horizontal position
    let y = Math.random() * (window.innerHeight - moveButton.clientHeight); // Random initial vertical position
    let xSpeed = buttonSpeed * buttonDirection; // Horizontal speed with direction
    let ySpeed = 1; // Slower vertical speed

    const frameRate = 60; // Adjust the frame rate

    function step() {
        // Update the button's position
        x += xSpeed;
        y += ySpeed;

        // Check for collisions with the screen edges and change direction
        if (x + moveButton.clientWidth >= window.innerWidth || x <= 0) {
            buttonDirection *= -1; // Reverse horizontal direction
        }
        if (y + moveButton.clientHeight >= window.innerHeight || y <= 0) {
            ySpeed *= -1; // Reverse vertical direction
        }

        // Prevent button from going off the screen horizontally
        if (x < 0) {
            x = 0;
        } else if (x + moveButton.clientWidth > window.innerWidth) {
            x = window.innerWidth - moveButton.clientWidth;
        }

        // Prevent button from going off the screen vertically
        if (y < 0) {
            y = 0;
        } else if (y + moveButton.clientHeight > window.innerHeight) {
            y = window.innerHeight - moveButton.clientHeight;
        }

        // Apply the new position to the button
        moveButton.style.left = x + 'px';
        moveButton.style.top = y + 'px';

        // Apply the sine wave effect to each letter
        letterObjects.forEach((letterObject, index) => {
            const amplitude = 40; // Adjust the amplitude of the sine wave
            const frequency = 1; // Adjust the frequency of the sine wave

            const verticalOffset = amplitude * Math.sin(frequency * (x + index * 3) * 0.1);
            letterObject.element.style.transform = `translateY(${verticalOffset}px)`;
        });

        // Request the next animation frame with the adjusted frame rate
        setTimeout(() => {
            requestAnimationFrame(step);
        }, 1000 / frameRate);
    }

    // Start the animation loop
    step();
}


// Start the animation loop
animateButton();


moveButton.addEventListener('click', () => {
    revealNextLetter();
});

function revealNextLetter() {
    if (currentIndex < messageText.length) {
        const letter = messageText[currentIndex].toUpperCase(); // Convert to uppercase
        const span = document.createElement('span');
        span.textContent = letter;

        // Create an object to store the letter and its element
        const letterObject = {
            letter: letter,
            element: span
        };

        // Apply a rainbow color to each letterObject
        applyRainbowColor(letterObject.element);

        // Append the letter to the message div
        messageDiv.appendChild(span);

        // Push the letter object to the array
        letterObjects.push(letterObject);
        currentIndex++;

        if (currentIndex >= messageText.length) {
            // Code to hide the button goes here
            moveButton.style.display = 'none';
        }
    }
}

// Function to apply rainbow color to an element
function applyRainbowColor(element) {
    const colorIndex = Math.floor(Math.random() * colors.length);
    element.style.color = colors[colorIndex];
}
