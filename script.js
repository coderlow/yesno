const movingButton = document.getElementById('moving-button');
const staticButton = document.getElementById('static-button');
const message = document.getElementById('message');

function getRandomPosition() {
    const x = window.innerWidth - movingButton.clientWidth - 20;
    const y = window.innerHeight - movingButton.clientHeight - 20;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return { x: randomX, y: randomY };
}

movingButton.addEventListener('mouseover', () => {
    const { x, y } = getRandomPosition();
    movingButton.style.position = 'absolute';
    movingButton.style.left = `${x}px`;
    movingButton.style.top = `${y}px`;
});

staticButton.addEventListener('click', () => {
    message.style.display = 'block';
});

