// Rocket prefab
class Trash extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);   // add to existing, displayList, updateList

        this.setInteractive({ pixelPerfect: true, alphaTolerance: 120, draggable: true });

        scene.input.setDraggable(this);

        this.roboTraits = ['trash'];

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
