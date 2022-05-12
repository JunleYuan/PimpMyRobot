class Workshop extends Phaser.Scene {
    constructor() {
        super("buildMain");
    }

    

    preload() {
        // load images/tile sprites
        
    }

    create() {
        console.log("opened scene workshop");
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        
    }

    update(delta) {

    }

}