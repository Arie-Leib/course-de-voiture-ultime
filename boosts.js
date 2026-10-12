class Boost {
    constructor(x, y, type = "nitro") {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.type = type;
        this.collected = false;
    }

    draw(ctx) {
        if (this.collected) return;

        if (this.type === "nitro") {
            ctx.fillStyle = "red";
        } else if (this.type === "magnet") {
            ctx.fillStyle = "blue";
        } else if (this.type === "shield") {
            ctx.fillStyle = "green";
        } else {
            ctx.fillStyle = "orange";
        }

        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    collect() {
        this.collected = true;
        return this.type;
    }
}

const boosts = [
    new Boost(300, 150, "nitro"),
    new Boost(500, 250, "magnet"),
    new Boost(700, 350, "shield")
];
