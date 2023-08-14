const moveButton = document.getElementById("moveButton");
const messageDiv = document.getElementById("message");
const message = "Hello Flatiron!";
let currentIndex = 0;

moveButton.addEventListener("click", () => {
    if (currentIndex < message.length) {
        const nextLetter = message[currentIndex];
        const letterSpan = document.createElement("span");
        letterSpan.textContent = nextLetter;

        // Generate a random color for the letter
        const randomColor = getRandomColor();
        letterSpan.style.color = randomColor;

        messageDiv.appendChild(letterSpan);
        currentIndex++;
    }

    // Generate random position for the button
    const randomX = Math.random() * (window.innerWidth - moveButton.clientWidth);
    const randomY = Math.random() * (window.innerHeight - moveButton.clientHeight);

    moveButton.style.position = "absolute";
    moveButton.style.top = `${randomY}px`;
    moveButton.style.left = `${randomX}px`;
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
