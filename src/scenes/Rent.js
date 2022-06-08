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

        let buffer = 1;


        
        this.time.delayedCall(1000, () => {

            //play sound depending on money
            if(lvl == 1){
                buffer = .5;
            }

            if(money > 120 * buffer){
                total_star = total_star + 5;
                this.sound.play('star5');
            }
            else if(money > 100 * buffer){

                total_star = total_star + 4;
                this.sound.play('star4');
            }else if(money > 80 * buffer){

                total_star = total_star + 3;
                this.sound.play('star3');

            }else if(money > 40 * buffer){

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

        //play animation of stars depending on money
        let star1 = this.add.image(1280/2, 370, 'star').setOrigin(.5, .5).setScale(.08).setAlpha(0);

        this.tweens.add({
            targets: star1,
            alpha: 1,
            delay: 1000,
            ease: 'Sine.easeInOut',
            duration: 1000
        });

        if(money > 40 * buffer){

            let star2 = this.add.image(1280/2-50, 380, 'star').setOrigin(.5, .5).setScale(.08).setAlpha(0);

            this.tweens.add({
                targets: star2,
                alpha: 1,
                delay: 1500,
                ease: 'Sine.easeInOut',
                duration: 1000
            });

        }

        if(money > 80 * buffer){

            let star3 = this.add.image(1280/2+50, 380, 'star').setOrigin(.5, .5).setScale(.08).setAlpha(0);

            this.tweens.add({
                targets: star3,
                alpha: 1,
                delay: 2000,
                ease: 'Sine.easeInOut',
                duration: 1000
            });

        }

        if(money > 100 * buffer){

            let star4 = this.add.image(1280/2-100, 390, 'star').setOrigin(.5, .5).setScale(.08).setAlpha(0);

            this.tweens.add({
                targets: star4,
                alpha: 1,
                delay: 2500,
                ease: 'Sine.easeInOut',
                duration: 1000
            });

        }

        if(money > 120 * buffer){

            let star5 = this.add.image(1280/2+100, 390, 'star').setOrigin(.5, .5).setScale(.08).setAlpha(0);

            this.tweens.add({
                targets: star5,
                alpha: 1,
                delay: 3000,
                ease: 'Sine.easeInOut',
                duration: 1000,
                onComplete: function(){ console.log("stars");}
            });

        }
       
        this.moveOnButt = this.add.image(game.config.width/2, game.config.height/2 + 200, 'moveOnButt').setOrigin(0.5, 0.5).setScale(0.25).setInteractive();
        this.moveOnButt.on('pointerdown', () => {
          
            this.game.sound.stopAll();
            this.sound.play('buttSound');
            if(lvl == 1){
                money = 0;
                lvl = lvl +1;
                this.scene.start("Day2Scene");
            }
            else if(lvl == 2){
                money = 0;
                lvl = lvl +1;
                this.scene.start("Day3Scene");
            }
            else if(lvl == 3){
                money = 0;
                lvl = lvl +1;
                this.scene.start("Day4Scene");
            }
            else if(lvl == 4){
                money = 0;
                lvl = 1;
                this.scene.start("FinalScene");
            }
            
          });
          this.moveOnButt.on('pointerout', () => {
            this.moveOnButt.setScale(0.25); 
          });
          this.moveOnButt.on('pointerover', () => {
            this.moveOnButt.setScale(0.35); 
          });


    }

    update(delta) {
        

    }


}