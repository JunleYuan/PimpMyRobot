class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    preload() {

        this.load.atlas('main_atlas', 'assets/Animations/MainMenu.png', 'assets/Animations/TitleScreen.json');

        this.load.atlas('door_atlas', 'assets/Animations/Door_Open.png', 'assets/Animations/door_open.json');
        this.load.atlas('bluespray_atlas', 'assets/Animations/blue_spray.png', 'assets/Animations/blue_spray.json');
       
        this.load.image('ResultScreen', './assets/ResultsScreen.png');
        this.load.image('background', './assets/menuBackground.png');
        this.load.image('play','./assets/playButton.png');
        this.load.image('tutorial','./assets/ControlButton.png');
        this.load.image('settings','./assets/settingsButton.png');

    }

    create() {
          //Title Screen Animation
          this.anims.create({ 
            key: 'title', 
            frames: this.anims.generateFrameNames('main_atlas', {      
                prefix: 'Title-10-FPS--',
                start: 1,
                end: 5,
                suffix: '.png',
                zeroPad: 1
            }), 
            frameRate: 10,
            repeat: -1 
        });
        
        this.anims.create({ 
          key: 'door', 
          frames: this.anims.generateFrameNames('door_atlas', {      
              prefix: 'Door_',
              start: 1,
              end: 9,
              suffix: '.png',
              zeroPad: 2
          }), 
          frameRate: 30
      });
      
      this.anims.create({ 
        key: 'test_spray', 
        frames: this.anims.generateFrameNames('bluespray_atlas', {      
            prefix: 'Blue_Spray_',
            start: 1,
            end: 23,
            suffix: '.png',
            zeroPad: 2
        }), 
        frameRate: 20,
        yoyo: 1
    });

        this.titleScreen = this.add.sprite(0, 0).play('title').setOrigin(0,0).setScale(0.5);
      
        this.doorScreen = this.add.sprite(0, 0).play('test_spray').setOrigin(0,0);
        //play button
        this.play = this.add.image(game.config.width/2 - 175, game.config.height/2 + 200, 'play').setOrigin(0.5, 0.5).setScale(0.5).setInteractive();
        this.play.on('pointerdown', () => {
            this.scene.start('loading'); 
          });
          this.play.on('pointerout', () => {
            this.play.setScale(0.5); 
          });
          this.play.on('pointerover', () => {
            this.play.setScale(0.6); 
          });

        //tutorial/controls button
        this.tutorial = this.add.image(game.config.width/2 + 175, game.config.height/2 + 200, 'tutorial').setOrigin(0.5, 0.5).setScale(0.5).setInteractive();
        this.tutorial.on('pointerdown', () => {
            this.scene.start('tutorial'); 
          });
        this.tutorial.on('pointerout', () => {
            this.tutorial.setScale(0.5); 
          });
          this.tutorial.on('pointerover', () => {
            this.tutorial.setScale(0.6); 
          });


        /*
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
          */
    }
    
    update() {

    }
}