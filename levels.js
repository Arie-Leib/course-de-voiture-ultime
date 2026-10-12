class LevelManager {
    constructor() {
        this.currentLevel = 1;
        this.maxLevel = 20;
    }

    nextLevel() {
        if (this.currentLevel < this.maxLevel) {
            this.currentLevel++;
            console.log("Niveau " + this.currentLevel);
        } else {
            console.log("Bravo ! Tu as terminé le jeu !");
        }
    }

    reset() {
        this.currentLevel = 1;
    }

    getLevel() {
        return this.currentLevel;
    }

    getEnemySpeed() {
        return 3 + (this.currentLevel * 0.5);
    }

    getReward() {
        return this.currentLevel * 100;
    }
}

const levelManager = new LevelManager();
