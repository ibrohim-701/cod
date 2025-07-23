const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const player = {
  x: 300,
  y: 300,
  size: 20,
  speed: 3,
  color: "green"
};

let zone = {
  x: 100,
  y: 100,
  size: 400,
  shrinkSpeed: 0.2
};

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function drawZone() {
  ctx.strokeStyle = "red";
  ctx.lineWidth = 4;
  ctx.strokeRect(zone.x, zone.y, zone.size, zone.size);
}

function update() {
  // Harakat
  if (keys["ArrowUp"]) player.y -= player.speed;
  if (keys["ArrowDown"]) player.y += player.speed;
  if (keys["ArrowLeft"]) player.x -= player.speed;
  if (keys["ArrowRight"]) player.x += player.speed;

  // Zona qisqarishi
  if (zone.size > 50) {
    zone.size -= zone.shrinkSpeed;
    zone.x += zone.shrinkSpeed / 2;
    zone.y += zone.shrinkSpeed / 2;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawZone();
  drawPlayer();
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

const keys = {};
window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

gameLoop();
