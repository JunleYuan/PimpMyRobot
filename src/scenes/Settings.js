class Settings extends Phaser.Scene {
    constructor() {
        super("settings");
    }

    preload() {

        this.load.image('background', './assets/menuBackground.png');
        this.load.image('mainMenu', './assets/menuButton.png');
    }

    create() {
        //background image
        this.background = this.add.image(0, 0, 'background').setOrigin(0, 0);

        //settings text
        let settingsConfig = {
            fontFamily: 'Courier',
            fontSize: '32px',
            color: '#000000',
            align: 'center',
         }
     this.settingsText = this.add.text(game.config.width/2, game.config.height/2, 'Settings Options Here', settingsConfig).setOrigin(0.5, 0.5);

        //back to main menu button
        this.menu = this.add.image(game.config.width/2, game.config.height - 72, 'mainMenu').setOrigin(0.5, 0.5).setInteractive();
        this.menu.on('pointerdown', () => {
            this.scene.start('menu'); 
          });
          this.menu.on('pointerout', () => {
            this.menu.setScale(1); 
          });
          this.menu.on('pointerover', () => {
            this.menu.setScale(1.1); 
          });
    }

    update() {

    }
}