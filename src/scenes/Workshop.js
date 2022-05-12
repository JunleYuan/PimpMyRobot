class Workshop extends Phaser.Scene {
    constructor() {
        super("buildMain");
    }


    create() {
        console.log("opened scene workshop");

        //open UI
        this.scene.launch("UIScene");

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
        

    }

    update(delta) {
        
        
        //console.log(this.pointer.x);

        //move camera
        if (keyLEFT.isDown)
        {   
            this.cam.scrollX -= 6;
            
        }
        else if (keyRIGHT.isDown)
        {   
            this.cam.scrollX += 6;
        }

        /*
        //move camera by mouse
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
