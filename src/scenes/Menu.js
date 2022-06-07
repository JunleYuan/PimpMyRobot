class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    create() {
          //Title Screen Animation
          this.soundconfig = {
            mute: false,
            volume: .1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }

        this.sound.play('introMusic', this.soundconfig);

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
        
        this.titleScreen = this.add.sprite(0, 0).play('title').setOrigin(0,0).setScale(0.5);
      
        
      
       
        //play button
        this.play = this.add.image(game.config.width/2 - 175, game.config.height/2 + 200, 'play').setOrigin(0.5, 0.5).setScale(0.5).setInteractive();
        this.play.on('pointerdown', () => {
          
            this.game.sound.stopAll();
            this.scene.start("UIScene");
            this.scene.start("buildMain");
            this.scene.start("inventory");
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
            this.scene.launch('tutorial'); 
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