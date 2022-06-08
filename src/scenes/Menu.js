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
              this.sound.play('buttSound');

              this.scene.start("Day1Scene");
          });

        this.play.on('pointerout', () => {
              this.play.setScale(0.5); 
          });

        this.play.on('pointerover', () => {
              this.play.setScale(0.6); 
          });

        //tutorial/controls button
        this.control = this.add.image(game.config.width/2 + 175, game.config.height/2 + 200, 'tutorial').setOrigin(0.5, 0.5).setScale(0.5).setInteractive();
        this.control.on('pointerdown', () => { 
            this.sound.play('buttSound');
            this.scene.launch('tutorial'); 
        });
        this.control.on('pointerout', () => {
            this.control.setScale(0.5); 
        });
        this.control.on('pointerover', () => {
            this.control.setScale(0.6); 
        });

      this.credit = this.add.image(game.config.width/2 + 475, game.config.height/2 + 200, 'creditButton').setOrigin(0.5, 0.5).setScale(0.3).setInteractive();
      this.credit.on('pointerdown', () => { 
          this.sound.play('buttSound');
          this.scene.start("credits");
        });
        this.credit.on('pointerout', () => {
            this.credit.setScale(0.3); 
        });
        this.credit.on('pointerover', () => {
            this.credit.setScale(0.35); 
        });

        this.tutorial = this.add.image(game.config.width/2 - 475, game.config.height/2 + 200, 'tutorialButton').setOrigin(0.5, 0.5).setScale(0.3).setInteractive();
        this.tutorial.on('pointerdown', () => { 
          this.game.sound.stopAll();
          this.sound.play('buttSound');
          this.scene.start("TutorialExplanation");
          });
          this.tutorial.on('pointerout', () => {
              this.tutorial.setScale(0.3); 
          });
          this.tutorial.on('pointerover', () => {
              this.tutorial.setScale(0.35); 
          });
    }
    
    update() {

    }
}