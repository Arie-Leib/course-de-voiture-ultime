class Track {
    constructor() {
        this.x = 150;
        this.y = 0;
        this.width = 700;
        this.height = 600;
    }

    draw(ctx) {
        // Herbe
        ctx.fillStyle = "#3CB043";
        ctx.fillRect(0, 0, 1000, 600);

        // Route
        ctx.fillStyle = "#555";
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // Lignes de la route
        ctx.strokeStyle = "white";
        ctx.lineWidth = 6;

        for (let y = 0; y < 600; y += 40) {
            ctx.beginPath();
            ctx.moveTo(500, y);
            ctx.lineTo(500, y + 20);
            ctx.stroke();
        }

        // Bordures
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, 0, 8, 600);
        ctx.fillRect(this.x + this.width - 8, 0, 8, 600);
    }
}

const track = new Track();
