class EnemyCar {
    constructor(x, y, speed = 4, color = "blue") {
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 35;
        this.speed = speed;
        this.color = color;
    }

    update() {
        this.y += this.speed;

        // Recommence en haut lorsqu'elle sort de l'écran
        if (this.y > 650) {
            this.y = -this.height;
            this.x = Math.random() * 900 + 20;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // Roues
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x + 15, this.y + this.height, 7, 0, Math.PI * 2);
        ctx.arc(this.x + this.width - 15, this.y + this.height, 7, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Liste des voitures ennemies
const enemyCars = [
    new EnemyCar(200, -100, 3, "blue"),
    new EnemyCar(450, -300, 5, "green"),
    new EnemyCar(700, -500, 4, "yellow")
];
