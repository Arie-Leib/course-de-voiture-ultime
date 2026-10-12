class Collision {

    static rectangle(a, b) {
        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        );
    }

    static carHitsEnemy(car, enemyCars) {
        for (let enemy of enemyCars) {
            if (Collision.rectangle(car, enemy)) {
                return enemy;
            }
        }
        return null;
    }

    static carCollectsCoin(car, coins) {
        for (let coin of coins) {
            if (
                !coin.collected &&
                car.x < coin.x + coin.radius &&
                car.x + car.width > coin.x - coin.radius &&
                car.y < coin.y + coin.radius &&
                car.y + car.height > coin.y - coin.radius
            ) {
                coin.collect();
            }
        }
    }

    static carCollectsBoost(car, boosts) {
        for (let boost of boosts) {
            if (
                !boost.collected &&
                Collision.rectangle(car, boost)
            ) {
                boost.collect();
            }
        }
    }

}
