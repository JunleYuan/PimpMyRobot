class Credits extends Phaser.Scene {
    constructor() {
        super("credits");
    }

    create() {
        //background image
        this.background = this.add.image(0, 0, 'ResultScreen').setOrigin(0, 0).setScale(0.5);
        this.border = this.add.image(0, 100, 'RobotBorder').setOrigin(0, 0);

        this.progText = this.add.bitmapText(500, 80, 'vcrBM', 'Programming',40,1);
        this.progText = this.add.bitmapText(500, 125, 'vcrBM', 'Junle Yuan\nOmar Alkharji\nLogan Flansaas',32,1);
        this.artText = this.add.bitmapText(320, 240, 'vcrBM', 'Artwork',40,1);
        this.artText = this.add.bitmapText(240, 285, 'vcrBM', 'Minmini Sanganathan\nOmar Alkharji',32,1);
        this.soundText = this.add.bitmapText(680, 240, 'vcrBM', 'Sound Design',40,1);
        this.soundText = this.add.bitmapText(640, 285, 'vcrBM', 'Minmini Sanganathan\nJunle Yuan',32,1);
        
        this.Text = this.add.bitmapText(360, 400, 'vcrBM', 'This Game was a cooperative final project \n for CMPM/ARTG 120 Spring 2022.',24,1);
        this.creditText = this.add.bitmapText(360, 440, 'vcrBM', 'Thank You For Playing!',48,1);
        
        this.progText.maxWidth = 640;
        this.artText.maxWidth = 640;
        this.soundText.maxWidth = 640;
        
        this.menu = this.add.image(game.config.width/2, game.config.height - 100, 'mainMenu').setOrigin(0.5, 0.5).setScale(0.25).setInteractive();
        this.menu.on('pointerdown', () => {
            this.sound.play('buttSound');
            this.game.sound.stopAll();
            this.scene.stop('credits'); 
            this.scene.start('menu'); 
          });
          this.menu.on('pointerout', () => {
            this.menu.setScale(0.25); 
          });
          this.menu.on('pointerover', () => {
            this.menu.setScale(0.35); 
          });
    }

}