class Settings {
    constructor() {
        this.musicVolume = 50;
        this.soundVolume = 50;
        this.fullscreen = false;
        this.showFPS = false;
    }

    setMusicVolume(value) {
        this.musicVolume = value;
    }

    setSoundVolume(value) {
        this.soundVolume = value;
    }

    toggleFullscreen() {
        this.fullscreen = !this.fullscreen;
    }

    toggleFPS() {
        this.showFPS = !this.showFPS;
    }

    getSettings() {
        return {
            musicVolume: this.musicVolume,
            soundVolume: this.soundVolume,
            fullscreen: this.fullscreen,
            showFPS: this.showFPS
        };
    }
}

const settings = new Settings();
