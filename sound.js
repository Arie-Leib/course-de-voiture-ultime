class SoundManager {
    constructor() {
        this.sounds = {};
        this.musicVolume = 0.5;
        this.soundVolume = 1.0;
    }

    load(name, file) {
        this.sounds[name] = new Audio(file);
        this.sounds[name].volume = this.soundVolume;
    }

    play(name) {
        if (this.sounds[name]) {
            this.sounds[name].currentTime = 0;
            this.sounds[name].play();
        }
    }

    stop(name) {
        if (this.sounds[name]) {
            this.sounds[name].pause();
            this.sounds[name].currentTime = 0;
        }
    }

    setMusicVolume(volume) {
        this.musicVolume = volume;
    }

    setSoundVolume(volume) {
        this.soundVolume = volume;

        for (const sound in this.sounds) {
            this.sounds[sound].volume = volume;
        }
    }
}

const soundManager = new SoundManager();

// Exemple de chargement des sons
soundManager.load("engine", "sounds/engine.mp3");
soundManager.load("coin", "sounds/coin.mp3");
soundManager.load("crash", "sounds/crash.mp3");
soundManager.load("boost", "sounds/boost.mp3");
