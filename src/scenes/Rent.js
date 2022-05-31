class Rent extends Phaser.Scene {
    constructor() {
        super("rent");
    }

    

    create() {


        let btext = this.add.bitmapText( 1280/2, 720, 'bm', 'The rent was '+ rent +' and you made '+ money, 40).setOrigin(.5, .5).setMaxWidth(400).setAlpha(0);

        let tween = this.tweens.add({
            targets: btext,
            y: 720/2,
            alpha: 1,
            duration: 3000
        });

        this.clock = this.time.delayedCall(10000, () => {

            lvl = lvl +1;

            this.scene.start("UIScene");
            this.scene.start("buildMain");
            this.scene.start("inventory");

        })
        


    }

    update(delta) {
        

    }


}