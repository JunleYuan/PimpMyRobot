class Rent extends Phaser.Scene {
    constructor() {
        super("rent");
    }

    

    create() {

        storeParts = [];
        subParts = [];
        whichScene = 4;

        let btext = this.add.bitmapText( 1280/2, 520, 'bm', 'You made $ '+ money , 50).setOrigin(.5, .5).setMaxWidth(400).setAlpha(0);

        this.time.delayedCall(1000, () => {

            if(money > 350){

                this.sound.play('star5');
            }


        })
        

        let tween = this.tweens.add({
            targets: btext,
            y: 300,
            alpha: 1,
            duration: 1000
        });

        let star1 = this.add.image(1280/2, 370, 'star').setOrigin(.5, .5).setScale(.1).setAlpha(0);

        this.tweens.add({
            targets: star1,
            alpha: 1,
            delay: 1000,
            ease: 'Sine.easeInOut',
            duration: 1000
        });

        if(money > 100){

            let star2 = this.add.image(1280/2-50, 380, 'star').setOrigin(.5, .5).setScale(.1).setAlpha(0);

            this.tweens.add({
                targets: star2,
                alpha: 1,
                delay: 1500,
                ease: 'Sine.easeInOut',
                duration: 1000
            });

        }

        if(money > 200){

            let star3 = this.add.image(1280/2+50, 380, 'star').setOrigin(.5, .5).setScale(.1).setAlpha(0);

            this.tweens.add({
                targets: star3,
                alpha: 1,
                delay: 2000,
                ease: 'Sine.easeInOut',
                duration: 1000
            });

        }

        if(money > 300){

            let star4 = this.add.image(1280/2-100, 390, 'star').setOrigin(.5, .5).setScale(.1).setAlpha(0);

            this.tweens.add({
                targets: star4,
                alpha: 1,
                delay: 2500,
                ease: 'Sine.easeInOut',
                duration: 1000
            });

        }

        if(money > 350){

            let star5 = this.add.image(1280/2+100, 390, 'star').setOrigin(.5, .5).setScale(.1).setAlpha(0);

            let star5tw = this.tweens.add({
                targets: star5,
                alpha: 1,
                delay: 3000,
                ease: 'Sine.easeInOut',
                duration: 1000,
                onComplete: function(){ console.log("stars");}
            });

        }

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