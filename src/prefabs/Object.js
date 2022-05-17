// Rocket prefab
class Object extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture,traits,part) {
        super(scene, x, y, texture);

        scene.add.existing(this);   // add to existing, displayList, updateList

        this.setScale(.2);
        
        // 0:head 1:body 2:arms 3:leg
        this.which_part = part;

        this.isInInventory = false;

        this.isInSub = false;

        this.roboTraits = traits.slice();

        console.log("robo traits: "+this.roboTraits);

        this.setInteractive({ pixelPerfect: true, alphaTolerance: 120, draggable: true });

        scene.input.setDraggable(this);

        this.setDepth(1);

        this.on('dragstart', function (pointer, dragX, dragY) {

            this.setDepth(2);


        });

        this.on('drag', function (pointer, dragX, dragY) {

            

            this.x = dragX;
            this.y = dragY;


        });
        this.on('dragend', function (pointer, dragX, dragY) {

            this.setDepth(1);

            if(this.isInInventory){
                
                this.x = 55;
                switch(this.which_part){

                    case 0:
    
                        this.y = 200;
    
                        break;
    
                    case 1:
    
                        this.y = 240;
    
                        break;
                    case 2:

                        this.y = 350;
    
                        break;

                    case 3:

                        this.y = 380;
    
                        break;
    
                }

            }

            if (this.isInSub){

                this.x = 1280/2;
                this.y = 720/2;

            }

        });

    }

    update() {
        
    }

    
}
