class Total extends Phaser.Scene {
    constructor() {
        super("total");
    }

    

    create() {

        this.background = this.add.image(0, 0, 'ResultScreen').setOrigin(0, 0).setScale(0.5);
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

    }

    update(delta) {
        

    }


}