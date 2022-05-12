class Loading extends Phaser.Scene {
    constructor() {
        super("workShop");
    }

    

    preload() {
        //this.load.image('backgroundWS', './assets/back.png');
        
        let loadingBar = this.add.graphics({
            
            fillStyle: {
                color: 0xffffff //white
            }
            
        })
        this.loadWidth = 200;
        this.loadHeight = 50;

        // load images/tile sprites

        this.loadIMG();

        //add lag to see how it looks like
        /*
        for(let i = 0;i<1000;i++){
            this.load.image('background'+ i, './assets/back.png');

        }
        */
        
        
        this.load.on("progress",(percent)=>{
            loadingBar.fillRect(this.game.renderer.width/2 - this.loadWidth/2, this.game.renderer.height/2, this.loadWidth * percent, this.loadHeight);

        })

    }

    create() {
        
        
        //this.scene.start("UIScene");
        this.scene.start("buildMain");
    }

    update(delta) {

    }

    loadIMG(){
        this.load.image('backgroundWS', './assets/back.png');
        this.load.image('inventory', './assets/inv.png');

    }

}