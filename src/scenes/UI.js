class UIScene extends Phaser.Scene {
    constructor() {
        super("UIScene");
    }

    

    create() {

        this.pageOpen = false;
        this.firstOpen = true;

        console.log("UI open");

        this.ui = this.add.image(this.game.renderer.width, this.game.renderer.height/2, 'inventory').setOrigin(1, .5).setScale(2);
        // var ourGame = this.scene.get('buildMain');

        this.require = this.add.image(this.game.renderer.width, 0, 'require').setOrigin(1, 0).setScale(1);
        this.require.setInteractive();

        this.require.on('pointerdown', () => {
            
            if(this.firstOpen){
                this.scene.launch("requireList");
                this.scene.bringToTop();
                this.firstOpen =false;
                this.pageOpen = true;
            }else{
                console.log("ran");
                if(this.pageOpen){
                    console.log("close");
                    this.scene.sleep("requireList");
                    this.pageOpen = false;
                }else{
                    console.log("open");
                    this.scene.wake("requireList");
                    this.scene.bringToTop();
                    this.pageOpen = true;
                }

            } 
            
            
            

        });

    }

    update(delta) {
        

    }


}