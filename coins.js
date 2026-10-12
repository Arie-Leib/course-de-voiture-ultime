class Coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 12;
        this.value = 1;
        this.collected = false;
    }

    draw(ctx) {
        if (this.collected) return;

        ctx.fillStyle = "gold";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#d4af37";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    collect() {
        this.collected = true;
        return this.value;
    }
}

const coins = [
    new Coin(250, 120),
    new Coin(450, 250),
    new Coin(650, 180),
    new Coin(350, 400),
    new Coin(750, 500)
];
