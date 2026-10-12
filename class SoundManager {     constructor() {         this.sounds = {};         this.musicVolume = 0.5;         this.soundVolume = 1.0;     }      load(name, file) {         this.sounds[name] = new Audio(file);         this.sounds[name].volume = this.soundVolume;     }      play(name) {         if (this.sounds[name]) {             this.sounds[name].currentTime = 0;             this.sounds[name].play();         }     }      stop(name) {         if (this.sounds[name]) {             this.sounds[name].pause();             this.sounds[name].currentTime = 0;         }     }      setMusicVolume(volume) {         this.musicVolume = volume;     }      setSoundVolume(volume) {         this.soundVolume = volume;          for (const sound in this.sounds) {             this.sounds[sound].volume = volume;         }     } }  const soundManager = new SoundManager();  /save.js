class SaveManager {
    constructor() {
        this.saveKey = "course_de_voitures_ultime";
    }

    save(data) {
        localStorage.setItem(this.saveKey, JSON.stringify(data));
        console.log("Partie sauvegardée !");
    }

    load() {
        const data = localStorage.getItem(this.saveKey);

        if (data) {
            return JSON.parse(data);
        }

        return null;
    }

    deleteSave() {
        localStorage.removeItem(this.saveKey);
        console.log("Sauvegarde supprimée.");
    }
}

const saveManager = new SaveManager();

// Exemple de sauvegarde
saveManager.save({
    level: 1,
    coins: 0,
    score: 0,
    selectedCar: 0
});

// Exemple de chargement
const gameData = saveManager.load();

if (gameData) {
    console.log(gameData);
}
