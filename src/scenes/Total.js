class Total extends Phaser.Scene {
    constructor() {
        super("total");
    }

    

    create() {

        this.soundconfig = {
            mute: false,
            volume: .1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }

        this.sound.play('WaitingMusic', this.soundconfig);

        this.background = this.add.image(0, 0, 'ResultScreen').setOrigin(0, 0).setScale(0.5);
        this.border = this.add.image(0, 100, 'RobotBorder').setOrigin(0, 0);
        this.ResultText = this.add.image(0, -100, 'ResultText').setOrigin(0, 0).setScale(0.5).setAlpha(0);

        this.tweens.add({
            targets: this.ResultText,
            y: 0,
            alpha: 1,
            ease: 'Sine.inOut',
            duraton: 500
        });

        

        let btext = this.add.bitmapText( 1280/2, 520, 'vcrBM', 'You made $'+ total_money +' and '+ total_star +' stars in total.' , 40).setOrigin(.5, .5).setAlpha(0);

        let tween = this.tweens.add({
            targets: btext, 
            y: 300,
            alpha: 1,
            duration: 1000
        });

        this.menu = this.add.image(game.config.width/2, game.config.height - 250, 'creditButton').setOrigin(0.5, 0.5).setScale(0.25).setInteractive();
        this.menu.on('pointerdown', () => {
            this.sound.play('buttSound');
            this.scene.start('credits'); 
          });
          this.menu.on('pointerout', () => {
            this.menu.setScale(0.25); 
          });
          this.menu.on('pointerover', () => {
            this.menu.setScale(0.35); 
          });

    }

    update(delta) {
        

    }


}