class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    preload() {

        this.load.image('background', './assets/menuBackground.png');
        this.load.image('title','./assets/title.png');
        this.load.image('play','./assets/playButton.png');
        this.load.image('tutorial','./assets/tutorialButton.png');
        this.load.image('settings','./assets/settingsButton.png');

    }

    create() {
        //background image
        this.background = this.add.image(0, 0, 'background').setOrigin(0, 0);

        //title
        this.title = this.add.image(game.config.width/2, game.config.height/4, 'title').setOrigin(0.5, 0.5);

        //play button
        this.play = this.add.image(game.config.width/2, game.config.height/2, 'play').setOrigin(0.5, 0.5).setInteractive();
        this.play.on('pointerdown', () => {
            this.scene.start('loading'); 
          });
          this.play.on('pointerout', () => {
            this.play.setScale(1); 
          });
          this.play.on('pointerover', () => {
            this.play.setScale(1.1); 
          });

        //tutorial/controls button
        this.tutorial = this.add.image(game.config.width/2, game.config.height/2 + 128, 'tutorial').setOrigin(0.5, 0.5).setInteractive();
        this.tutorial.on('pointerdown', () => {
            this.scene.start('tutorial'); 
          });
        this.tutorial.on('pointerout', () => {
            this.tutorial.setScale(1); 
          });
          this.tutorial.on('pointerover', () => {
            this.tutorial.setScale(1.1); 
          });

        //settings button
        this.settings = this.add.image(game.config.width/2, game.config.height/2 + 256, 'settings').setOrigin(0.5, 0.5).setInteractive();
        this.settings.on('pointerdown', () => {
            this.scene.start('settings'); 
          });
        this.settings.on('pointerout', () => {
            this.settings.setScale(1); 
          });
          this.settings.on('pointerover', () => {
            this.settings.setScale(1.1); 
          });
    }

    update() {

    }
}