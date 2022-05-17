// Rocket prefab
class Object extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture,traits,part) {
        super(scene, x, y, texture);

        scene.add.existing(this);   // add to existing, displayList, updateList
        
        // 0:leg 1:body 2:arms 3:head
        this.which_part = part;

        this.roboTraits = traits.slice();

        console.log("robo traits: "+this.roboTraits);

        this.setInteractive();

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


        });

    }

    update() {
        
    }

    
}
