// Rocket prefab
class Object extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture,traits,part) {
        super(scene, x, y, texture);

        scene.add.existing(this);   // add to existing, displayList, updateList

        this.setScale(.2);
        
        // 0:head 1:body 2:arms 3:leg
        this.which_part = part;

        this.textureArray = [texture];

        this.isInInventory = false;

        this.isInSub = false;

        this.roboTraits = traits.slice();

        //console.log("robo traits: "+this.roboTraits);

        this.setInteractive({ pixelPerfect: true, alphaTolerance: 120, draggable: true });

        scene.input.setDraggable(this);

        this.setDepth(1);

        this.on('dragstart', function (pointer, dragX, dragY) {

            scene.sound.play('roboSound');
            this.setDepth(2);


        });

        this.on('drag', function (pointer, dragX, dragY) {

            this.x = dragX;
            this.y = dragY;


        });
        this.on('dragend', function (pointer, dragX, dragY) {

            this.setDepth(1);

            if(this.isInInventory){
                
                this.x = 70;
                switch(this.which_part){

                    case 0:
                        this.setScale(.15);
                        this.y = 335;
    
                        break;
    
                    case 1:
                        this.setScale(.12);
                        this.y = 355;
    
                        break;
                    case 2:
                        this.setScale(.1);
                        this.y = 440;
    
                        break;

                    case 3:
                        this.setScale(.07);
                        this.y = 490;
    
                        break;
    
                }

            }

            if (this.isInSub){

                this.x = 1280/2;
                this.y = 720/2-20;

                if(this.which_part==1){

                    this.setDepth(3);
                }

            }

        });

    }

    update() {
        
    }

    
}
