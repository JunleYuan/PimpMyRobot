class RequireList extends Phaser.Scene {
    constructor() {
        super("requireList");
    }

    

    create() {


        console.log("UI open");

        this.page = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'requireText').setOrigin(.5, .5).setScale(2);
        // var ourGame = this.scene.get('buildMain');
        this.page.setInteractive();
        this.input.setDraggable(this.page);

        this.page.on('drag', function (pointer, dragX, dragY) {

            this.x = dragX;
            this.y = dragY;

        });


    }

    update(delta) {
        

    }


}