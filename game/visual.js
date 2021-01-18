class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    step = canvas.height/300;
    r = 10;

    goDown() { if (this.y + this.step <= canvas.height - this.r) this.y += this.step; }

    goUp() { if (this.y + this.step >= this.r) this.y -= this.step; }

    goLeft() { if (this.x + this.step >= this.r) this.x -= this.step; }

    goRight() { if (this.x + this.step <= canvas.width - this.r) this.x += this.step; }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }

}

function downButton(e) {
    switch (e.keyCode) {
        case 65:
            aDown = true;
            break;
        case 87:
            wDown = true;
            break;
        case 83:
            sDown = true;
            break;
        case 68:
            dDown = true;
            break;
    }
}

function upButton(e) {
    switch (e.keyCode) {
        case 65:
            aDown = false;
            break;
        case 87:
            wDown = false;
            break;
        case 83:
            sDown = false;
            break;
        case 68:
            dDown = false;
            break;
    }
}

function init() {
    id = "canvas";
    canvas = document.getElementById(id);
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    ctx = canvas.getContext("2d");
    player = new Player(canvas.width/2, canvas.height/2);
    wDown = false;
    aDown = false;
    sDown = false;
    dDown = false;
    setInterval(play, 1);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
}

function play() {
    if (wDown) player.goUp();
    if (aDown) player.goLeft();
    if (sDown) player.goDown();
    if (dDown) player.goRight();
    draw();
}

document.addEventListener("keydown", downButton);
document.addEventListener("keyup", upButton);
init();