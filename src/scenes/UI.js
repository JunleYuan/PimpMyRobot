class UIScene extends Phaser.Scene {
    constructor() {
        super("UIScene");
    }

    

    create() {
        this.anims.create({ 
            key: 'door', 
            frames: this.anims.generateFrameNames('door_atlas', {      
                prefix: 'Door_',
                start: 1,
                end: 9,
                suffix: '.png',
                zeroPad: 2
            }), 
            frameRate: 30
            
        });

        

        this.scene.launch("requireList");

        TpageOpen = false;

        this.see_ui = this.add.image(-125, 0, 'Time_And_Money_UI').setOrigin(0, 0).setScale(0.6);
        

        this.see_time = this.add.text(500, 5, "1", { font: '64px Arial', fill: '#0000FF' });

        this.see_money = this.add.text(755, 5, "0", { font: '64px Arial', fill: '#0000FF' });
        this.doorScreen = this.add.sprite(0, 0).setOrigin(0,0);
        
        this.doorScreen.on('animationcomplete', () => {
            this.doorScreen.visible = false;
            
        });

        this.timer();
        

        console.log("UI open");

        //this.ui = this.add.image(this.game.renderer.width, this.game.renderer.height/2, 'inventory').setOrigin(1, .5).setScale(2);
        // var ourGame = this.scene.get('buildMain');

        this.require = this.add.image(this.game.renderer.width, 0, 'require').setOrigin(1, 0).setScale(0.75);
        this.require.setInteractive();

        this.require.on('pointerdown', () => {
            
            
            console.log("ran");
            if(TpageOpen){
                console.log("close");
                this.scene.sleep("requireList");
                TpageOpen = false;
            }else{
                this.sound.play('orderSound');
                console.log("open");
                this.scene.wake("requireList");
                
                TpageOpen = true;
            }

            

        });

        this.require.on('pointerout', () => {
            this.require.setScale(0.75); 
          });
        this.require.on('pointerover', () => {
            this.require.setScale(0.85); 
        });

        this.scene.bringToTop('UIScene');
    }

    update(delta) {
        this.see_time.text = ""+ timer; 

        this.see_money.text = ""+ money; 

        if(enterSR == true){
            this.doorScreen.visible = true;
            this.doorScreen.play('door');
            enterSR = false;
        }
        
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