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
        this.cam.setScroll(1200, 0);

        //add control of camera
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.backg = this.add.image(0, 0, 'backgroundWS').setOrigin(0, 0).setScale(4);

        //  Make our game world bound
        this.cameras.main.setBounds(0, 0, this.backg.width*4, this.backg.height*4);


        //crafting
        this.craftTable = this.add.image(1800, 300, 'crafting').setOrigin(0, 0).setScale(2);
        this.craftTable.setInteractive();

        this.craftTable.on('pointerdown', () => {
            this.scene.start("inventory");

        });

        

    }

    update(delta) {
        
        

        //move camera
        if (keyLEFT.isDown)
        {   
            this.cam.scrollX -= 6;
            
        }
        else if (keyRIGHT.isDown)
        {   
            this.cam.scrollX += 6;
        }

        
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
