class RequireList extends Phaser.Scene {
    constructor() {
        super("requireList");
    }

    

    create() {

        

        console.log("UI open");

        console.log("what traits: " + this.whatTraits());

        this.testText = this.add.text(0,-250,'Ticket').setOrigin(.5, .5);

        this.page = this.add.image(0, 0, 'requireText').setOrigin(.5, .5).setScale(2);
        // var ourGame = this.scene.get('buildMain');

        let textArray = [];

        for(let i = 0;i<3;i++){
            textArray[i] = this.add.text(-170,-200+i*80,'XXXXXXXXXX').setOrigin(0, .5);

        }

        this.base = [this.page, this.testText];

        this.base = this.base.concat(textArray);

        this.container = this.add.container(this.game.renderer.width/2, this.game.renderer.height/2, this.base);

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

    whatTraits(){

        this.traitArray = ['cute','cool'];
        this.ranTraits = Math.floor(Math.random() * 2);

        this.yesNo = Math.floor(Math.random() * 2);

        return [this.traitArray[this.ranTraits],this.yesNo]


        
    }


}