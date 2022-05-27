class Workshop extends Phaser.Scene {
    constructor() {
        super("buildMain");
    }


    create() {
        console.log("opened scene workshop");

        this.soundconfig = {
            mute: false,
            volume: .1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }

        this.sound.play('backgroundMusic', this.soundconfig);

        //open UI (might not needed)
        //this.scene.launch("UIScene");

        //mouse
        this.pointer = this.input.activePointer;

        //camera
        this.cam = this.cameras.main;
        this.cam.setScroll(0, 0);

        //add control of camera
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.backg = this.add.image(0, 0, 'backgroundWS').setOrigin(0, 0).setScale(4);

        //  Make our game world bound
        this.cameras.main.setBounds(0, 0, this.backg.width*4, this.backg.height*4);


        //boxes
        this.box1 = this.add.image(150, 600, 'crafting').setOrigin(0, 0).setScale(1);
        this.box1.setInteractive();

        this.box1.on('pointerdown', () => {

        
            whichScene = 0;
            this.scene.sleep("buildMain");
            //this.scene.wake("inventory");


        });

        
        this.box2 = this.add.image(300, 600, 'crafting').setOrigin(0, 0).setScale(1);
        this.box2.setInteractive();

        this.box2.on('pointerdown', () => {
        
            whichScene = 1;
            this.scene.sleep("buildMain");
            //this.scene.wake("inventory");
            
        });

        this.box3 = this.add.image(450, 600, 'crafting').setOrigin(0, 0).setScale(1);
        this.box3.setInteractive();

        this.box3.on('pointerdown', () => {
        
            whichScene = 2;
            this.scene.sleep("buildMain");
            //this.scene.wake("inventory");
            
        });

        this.box4 = this.add.image(600, 600, 'crafting').setOrigin(0, 0).setScale(1);
        this.box4.setInteractive();

        this.box4.on('pointerdown', () => {
        
            whichScene = 3;
            this.scene.sleep("buildMain");
            //this.scene.wake("inventory");
        
        });

        // this.craft = this.add.image(1800, 400, 'crafting').setOrigin(0, 0).setScale(1);
        // this.craft.setInteractive();

        // this.craft.on('pointerdown', () => {
            
        //     whichScene = 4;
        //     this.scene.sleep("buildMain");
        //     this.scene.wake("inventory");
            
        // });

        

    }

    update(delta) {
        
        // //move camera
        // if (keyLEFT.isDown)
        // {   
        //     this.cam.scrollX -= 6;
            
        // }
        // else if (keyRIGHT.isDown)
        // {   
        //     this.cam.scrollX += 6;
        // }

        
        //move camera by mouse

        //console.log(this.pointer.x);

        /*
        if (this.pointer.x < 100)
        {   
            
            this.cam.scrollX -= 6;
        }
        else if ( this.pointer.x > 1000)
        {   
            this.cam.scrollX += 6;
        }
        */

    }


}
