class Car {
    constructor(x, y, color = "red") {
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 35;
        this.speed = 0;
        this.maxSpeed = 8;
        this.acceleration = 0.2;
        this.friction = 0.05;
        this.color = color;
    }

    accelerate() {
        if (this.speed < this.maxSpeed) {
            this.speed += this.acceleration;
        }
    }

    brake() {
        if (this.speed > 0) {
            this.speed -= this.acceleration * 2;
        }
    }

    update() {
        this.speed -= this.friction;
        if (this.speed < 0) this.speed = 0;

        this.x += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x + 15, this.y + this.height, 7, 0, Math.PI * 2);
        ctx.arc(this.x + this.width - 15, this.y + this.height, 7, 0, Math.PI * 2);
        ctx.fill();
    }
}
