class UIScene extends Phaser.Scene {
    constructor() {
        super("UIScene");
    }

    

    create() {

        this.scene.launch("requireList");

        TpageOpen = false;

        this.see_ui = this.add.image(0, 0, 'UI').setOrigin(0, 0).setScale(1);

        this.see_time = this.add.text(500, 5, "1", { font: '64px Arial', fill: '#0000FF' });

        this.see_money = this.add.text(825, 5, "0", { font: '64px Arial', fill: '#0000FF' });

        

        this.timer();
        

        console.log("UI open");

        //this.ui = this.add.image(this.game.renderer.width, this.game.renderer.height/2, 'inventory').setOrigin(1, .5).setScale(2);
        // var ourGame = this.scene.get('buildMain');

        this.require = this.add.image(this.game.renderer.width, 0, 'require').setOrigin(1, 0).setScale(1);
        this.require.setInteractive();

        this.require.on('pointerdown', () => {
            
            
            console.log("ran");
            if(TpageOpen){
                console.log("close");
                this.scene.sleep("requireList");
                TpageOpen = false;
            }else{
                console.log("open");
                this.scene.wake("requireList");
                
                TpageOpen = true;
            }

            

        });


    }

    update(delta) {
        this.see_time.text = ""+ timer; 

        this.see_money.text = ""+ money; 


    }
    timer() {
        this.clock = this.time.delayedCall(1000, () => {

            timer = timer - 1;
            
            if (timer > 0) {
                
                this.timer();
            }else{
                timer = 60*2;

                this.game.sound.stopAll();

                this.scene.stop('requireList');
                this.scene.stop('inventory');
                this.scene.stop('buildMain');
                this.scene.stop('UIScene');

                this.scene.start("rent");

            }

        }, null, this);
    }


}