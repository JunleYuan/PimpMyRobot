class Loading extends Phaser.Scene {
    constructor() {
        super("loading");
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

        // load sound
        this.loadSound();

        //add lag to see how it looks like
        
        // for(let i = 0;i<1000;i++){
        //     this.load.image('background'+ i, './assets/back.png');

        // }
        
        
        
        this.load.on("progress",(percent)=>{
            loadingBar.fillRect(this.game.renderer.width/2 - this.loadWidth/2, this.game.renderer.height/2, this.loadWidth * percent, this.loadHeight);

        })

    }

    create() {
        
        
        this.scene.start("UIScene");
        this.scene.start("buildMain");
        this.scene.start("inventory");
        //this.scene.start("test");
    }

    update(delta) {

    }

    loadIMG(){
        this.load.image('backgroundWS', './assets/back.png');
        this.load.image('inventory', './assets/inv.png');
        this.load.image('crafting', './assets/craft.png');
        this.load.image('require', './assets/require.png');
        this.load.image('requireText', './assets/requireText.png');
        this.load.image('backButt', './assets/back_butt.png');
        this.load.image('sellButt', './assets/sell.png');
        this.load.image('UI', './assets/UI_Trial.png');
        this.load.image('star', './assets/star.png');

        //this.load.atlas('cool_atlas', './assets/TrialSpritesheet/Cool-Robot.png', './assets/TrialSpritesheet/cool-robot.json');

        this.load.image('cool_h_b', './assets/Cool-Head-Blue.png');
        this.load.image('cool_b_b', './assets/Cool-Torso-Blue.png');
        this.load.image('cool_a_b', './assets/Cool-Arms-Blue.png');
        this.load.image('cool_l_b', './assets/Cool-Legs-Blue.png');

        this.load.image('cool_h_r', './assets/Cool-Head-Ruby.png');
        this.load.image('cool_b_r', './assets/Cool-Torso-Ruby.png');
        this.load.image('cool_a_r', './assets/Cool-Arms-Ruby.png');
        this.load.image('cool_l_r', './assets/Cool-Legs-Ruby.png');

        this.load.image('cute_h_p', './assets/Cute-Head-Platinum.png');
        this.load.image('cute_b_p', './assets/Cute-Torso-Platinum.png');
        this.load.image('cute_a_p', './assets/Cute-Arms-Platinum.png');
        this.load.image('cute_l_p', './assets/Cute-Legs-Platinum.png');

        this.load.image('cute_h_r', './assets/Cute-Head-RosePink.png');
        this.load.image('cute_b_r', './assets/Cute-Torso-RosePink.png');
        this.load.image('cute_a_r', './assets/Cute-Arms-RosePink.png');
        this.load.image('cute_l_r', './assets/Cute-Legs-RosePink.png');

        this.load.image('sharp_h_j', './assets/Sharp-Head-Jade.png');
        this.load.image('sharp_b_j', './assets/Sharp-Torso-Jade.png');
        this.load.image('sharp_a_j', './assets/Sharp-Arms-Jade.png');
        this.load.image('sharp_l_j', './assets/Sharp-Legs-Jade.png');

        this.load.image('sharp_h_t', './assets/Sharp-Head-Teal.png');
        this.load.image('sharp_b_t', './assets/Sharp-Torso-Teal.png');
        this.load.image('sharp_a_t', './assets/Sharp-Arms-Teal.png');
        this.load.image('sharp_l_t', './assets/Sharp-Legs-Teal.png');

        this.load.image('sharp_h_n', './assets/Sharp-Head-Uncolored.png');
        this.load.image('sharp_b_n', './assets/Sharp-Torso-Uncolored.png');
        this.load.image('sharp_a_n', './assets/Sharp-Arms-Uncolored.png');
        this.load.image('sharp_l_n', './assets/Sharp-Legs-Uncolored.png');

        this.load.image('cute_h_n', './assets/Cute-Head-Uncolored.png');
        this.load.image('cute_b_n', './assets/Cute-Torso-Uncolored.png');
        this.load.image('cute_a_n', './assets/Cute-Arms-Uncolored.png');
        this.load.image('cute_l_n', './assets/Cute-Legs-Uncolored.png');

        this.load.image('cool_h_n', './assets/Cool-Head-Uncolored.png');
        this.load.image('cool_b_n', './assets/Cool-Torso-Uncolored.png');
        this.load.image('cool_a_n', './assets/Cool-Arms-Uncolored.png');
        this.load.image('cool_l_n', './assets/Cool-Legs-Uncolored.png');


        for(let i = 0; i < 10;i++){

            this.load.image('cool_H_'+i, './assets/NewRobotParts/Cool-Head-'+i+'.png');

            this.load.image('cool_B_'+i, './assets/NewRobotParts/Cool-Torso-'+i+'.png');

            this.load.image('cool_A_'+i, './assets/NewRobotParts/Cool-Arms-'+i+'.png');

            this.load.image('cool_L_'+i, './assets/NewRobotParts/Cool-Legs-'+i+'.png');




            this.load.image('cute_H_'+i, './assets/NewRobotParts/Cute-Head-'+i+'.png');

            this.load.image('cute_B_'+i, './assets/NewRobotParts/Cute-Torso-'+i+'.png');

            this.load.image('cute_A_'+i, './assets/NewRobotParts/Cute-Arms-'+i+'.png');

            this.load.image('cute_L_'+i, './assets/NewRobotParts/Cute-Legs-'+i+'.png');


            

            this.load.image('sharp_H_'+i, './assets/NewRobotParts/Sharp-Head-'+i+'.png');

            this.load.image('sharp_B_'+i, './assets/NewRobotParts/Sharp-Torso-'+i+'.png');

            this.load.image('sharp_A_'+i, './assets/NewRobotParts/Sharp-Arms-'+i+'.png');

            this.load.image('sharp_L_'+i, './assets/NewRobotParts/Sharp-Legs-'+i+'.png');

        }

        

        


        this.load.bitmapFont('bm', 'assets/bm_0.png', 'assets/bm.xml');
    }

    loadSound(){
        this.load.audio('backgroundMusic', './assets/Mimi.mp3');
        this.load.audio('introMusic', './assets/My_song_3.mp3');
        this.load.audio('star5', './assets/star5.mp3');
        

    }

}