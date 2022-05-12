class UIScene extends Phaser.Scene {
    constructor() {
        super("UIScene");
    }

    

    create() {


        console.log("UI open");

        this.ui = this.add.image(this.game.renderer.width, this.game.renderer.height/2, 'inventory').setOrigin(1, .5).setScale(2);
        // var ourGame = this.scene.get('buildMain');




    }

    update(delta) {
        

    }


}