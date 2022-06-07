class Storage extends Phaser.Scene {
    constructor() {
        super("storageBG");
    }
    create() {
        this.backgroundStorage = this.add.image(0, 0, 'backgroundSR').setOrigin(0, 0).setScale(0.5);
        this.scene.sendToBack('storageBG');
    }
    
}