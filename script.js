
const moveButton = document.getElementById("moveButton");
let isMoved = false;

moveButton.addEventListener("click", () => {
    if (!isMoved) {
        moveButton.style.position = "absolute";
        moveButton.style.top = "50%";
        moveButton.style.left = "50%";
        moveButton.style.transform = "translate(-50%, -50%)";
        isMoved = true;
    } else {
        moveButton.style.position = "static";
        moveButton.style.top = "auto";
        moveButton.style.left = "auto";
        moveButton.style.transform = "none";
        isMoved = false;
    }
});