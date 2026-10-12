const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const playButton = document.getElementById("playButton");

let gameStarted = false;

const car = {
    x: 100,
    y: 280,
    width: 80,
    height: 40,
    speed: 6
};

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

playButton.addEventListener("click", () => {
    gameStarted = true;
    document.getElementById("menu").style.display = "none";
});

function update() {
    if (!gameStarted) return;

    if (keys["ArrowLeft"]) car.x -= car.speed;
    if (keys["ArrowRight"]) car.x += car.speed;
    if (keys["ArrowUp"]) car.y -= car.speed;
    if (keys["ArrowDown"]) car.y += car.speed;

    if (car.x < 0) car.x = 0;
    if (car.y < 0) car.y = 0;
    if (car.x > canvas.width - car.width) car.x = canvas.width - car.width;
    if (car.y > canvas.height - car.height) car.y = canvas.height - car.height;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "gray";
    ctx.fillRect(car.x, car.y, car.width, car.height);

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(car.x + 15, car.y + 40, 8, 0, Math.PI * 2);
    ctx.arc(car.x + 65, car.y + 40, 8, 0, Math.PI * 2);
    ctx.fill();
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
