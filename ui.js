class UI {
    constructor() {
        this.score = 0;
        this.coins = 0;
        this.level = 1;
        this.speed = 0;
    }

    setScore(score) {
        this.score = score;
    }

    setCoins(coins) {
        this.coins = coins;
    }

    setLevel(level) {
        this.level = level;
    }

    setSpeed(speed) {
        this.speed = Math.round(speed);
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.font = "24px Arial";

        ctx.fillText("🏁 Score : " + this.score, 20, 35);
        ctx.fillText("🪙 Pièces : " + this.coins, 20, 70);
        ctx.fillText("⭐ Niveau : " + this.level, 20, 105);
        ctx.fillText("🚗 Vitesse : " + this.speed + " km/h", 20, 140);
    }
}

const ui = new UI();
