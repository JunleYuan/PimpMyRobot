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

        this.backg = this.add.image(0, 0, 'backgroundWS').setOrigin(0, 0);

        //  Make our game world bound
        this.cameras.main.setBounds(0, 0, this.backg.width*4, this.backg.height*4);


        //boxes
        
        this.box5 = this.add.image(150, 150, 'BRDR').setOrigin(0, 0).setScale(1);
        this.box5.setInteractive();

        this.box5.on('pointerdown', () => {
            
            newScene = true;

            whichScene = 5;
            this.scene.sleep("buildMain");
            //this.scene.wake("inventory");
        
        });


    }

    update(delta) {
        
    }


}
