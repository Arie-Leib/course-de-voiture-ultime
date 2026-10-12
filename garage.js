class Garage {
    constructor() {
        this.cars = [
            { name: "Voiture Rouge", color: "red", speed: 8 },
            { name: "Voiture Bleue", color: "blue", speed: 10 },
            { name: "Voiture Verte", color: "green", speed: 12 }
        ];

        this.selectedCar = 0;
    }

    nextCar() {
        this.selectedCar++;

        if (this.selectedCar >= this.cars.length) {
            this.selectedCar = 0;
        }
    }

    previousCar() {
        this.selectedCar--;

        if (this.selectedCar < 0) {
            this.selectedCar = this.cars.length - 1;
        }
    }

    getCurrentCar() {
        return this.cars[this.selectedCar];
    }

    showInfo() {
        const car = this.getCurrentCar();

        console.log("Voiture :", car.name);
        console.log("Couleur :", car.color);
        console.log("Vitesse :", car.speed);
    }
}

const garage = new Garage();
