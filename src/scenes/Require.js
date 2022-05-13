class RequireList extends Phaser.Scene {
    constructor() {
        super("requireList");
    }

    

    create() {


        console.log("UI open");

        this.testText = this.add.text(0,-250,'Ticket').setOrigin(.5, .5);

        this.page = this.add.image(0, 0, 'requireText').setOrigin(.5, .5).setScale(2);
        // var ourGame = this.scene.get('buildMain');
        

        this.container = this.add.container(this.game.renderer.width/2, this.game.renderer.height/2, [ this.page, this.testText ]);

        this.container.setSize(this.page.width*2, this.page.height*2);

        this.container.setInteractive();
        this.input.setDraggable(this.container);

        this.container.on('drag', function (pointer, dragX, dragY) {

            this.x = dragX;
            this.y = dragY;


        });


    }

    update(delta) {
        

    }


}