class Rent extends Phaser.Scene {
    constructor() {
        super("rent");
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

        storeParts = [];
        subParts = [];
        whichScene = 4;

        let btext = this.add.bitmapText( 1280/2, 520, 'vcrBM', 'You made $'+ money , 50).setOrigin(.5, .5).setAlpha(0);


        total_money = total_money + money;

        this.time.delayedCall(1000, () => {

            if(money > 350){
                total_star = total_star + 5;
                this.sound.play('star5');
            }
            else if(money > 300){

                total_star = total_star + 4;
                this.sound.play('star4');
            }else if(money > 200){

                total_star = total_star + 3;
                this.sound.play('star3');

            }else if(money > 100){

                total_star = total_star + 2;
                this.sound.play('star2');
                
            }else{

                total_star = total_star + 1;
                this.sound.play('star1');
                
            }


        })
        

        let tween = this.tweens.add({
            targets: btext, 
            y: 300,
            alpha: 1,
            duration: 1000
        });

        let star1 = this.add.image(1280/2, 370, 'star').setOrigin(.5, .5).setScale(.08).setAlpha(0);

        this.tweens.add({
            targets: star1,
            alpha: 1,
            delay: 1000,
            ease: 'Sine.easeInOut',
            duration: 1000
        });

        if(money > 100){

            let star2 = this.add.image(1280/2-50, 380, 'star').setOrigin(.5, .5).setScale(.08).setAlpha(0);

            this.tweens.add({
                targets: star2,
                alpha: 1,
                delay: 1500,
                ease: 'Sine.easeInOut',
                duration: 1000
            });

        }

        if(money > 200){

            let star3 = this.add.image(1280/2+50, 380, 'star').setOrigin(.5, .5).setScale(.08).setAlpha(0);

            this.tweens.add({
                targets: star3,
                alpha: 1,
                delay: 2000,
                ease: 'Sine.easeInOut',
                duration: 1000
            });

        }

        if(money > 300){

            let star4 = this.add.image(1280/2-100, 390, 'star').setOrigin(.5, .5).setScale(.08).setAlpha(0);

            this.tweens.add({
                targets: star4,
                alpha: 1,
                delay: 2500,
                ease: 'Sine.easeInOut',
                duration: 1000
            });

        }

        if(money > 350){

            let star5 = this.add.image(1280/2+100, 390, 'star').setOrigin(.5, .5).setScale(.08).setAlpha(0);

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

            money = 0;
            lvl = lvl +1;

            this.scene.start("UIScene");
            this.scene.start("buildMain");
            this.scene.start("inventory");

        })
        


    }

    update(delta) {
        

    }


}