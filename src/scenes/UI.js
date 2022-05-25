class UIScene extends Phaser.Scene {
    constructor() {
        super("UIScene");
    }

    

    create() {

        this.scene.launch("requireList");

        this.pageOpen = false;

        //this.see_ui = this.add.image(0, 0, 'UI').setOrigin(0, 0).setScale(1);

        this.see_time = this.add.text(100, 0, "Time left: ", { font: '48px Arial', fill: '#0000FF' });

        this.see_money = this.add.text(400, 0, "Money: 0", { font: '48px Arial', fill: '#0000FF' });

        

        this.timer();
        

        console.log("UI open");

        //this.ui = this.add.image(this.game.renderer.width, this.game.renderer.height/2, 'inventory').setOrigin(1, .5).setScale(2);
        // var ourGame = this.scene.get('buildMain');

        this.require = this.add.image(this.game.renderer.width, 0, 'require').setOrigin(1, 0).setScale(1);
        this.require.setInteractive();

        this.require.on('pointerdown', () => {
            
            
            console.log("ran");
            if(this.pageOpen){
                console.log("close");
                this.scene.sleep("requireList");
                this.pageOpen = false;
            }else{
                console.log("open");
                this.scene.wake("requireList");
                this.scene.bringToTop();
                this.pageOpen = true;
            }

            

        });


    }

    update(delta) {
        this.see_time.text = "Time left: "+ timer; 

        this.see_money.text = "Money: "+ money; 

        

    }
    timer() {
        this.clock = this.time.delayedCall(1000, () => {

            timer = timer - 1;
            
            if (timer > 0) {
                
                this.timer();
            }

        }, null, this);
    }


}