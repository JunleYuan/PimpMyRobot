class Loading extends Phaser.Scene {
    constructor() {
        super("workShop");
    }

    

    preload() {
        // load images/tile sprites

        this.loadIMG();
        


        let loadingBar = this.add.graphics({
            
            fillStyle: {
                color: 0xffffff //white
            }
            
        })
        this.loadWidth = 200;
        this.loadHeight = 50;

        for(let i = 0;i<1000;i++){
            this.load.image('background'+ i, './assets/back.png');

        }
        
        
        this.load.on("progress",(percent)=>{
            loadingBar.fillRect(this.game.renderer.width/2 - this.loadWidth/2, this.game.renderer.height/2, this.loadWidth * percent, this.loadHeight);

        })

    }

    create() {
        
        
        this.scene.start("buildMain");
    }

    update(delta) {

    }
    loadIMG(){
        this.load.image('background', './assets/back.png');

    }

}