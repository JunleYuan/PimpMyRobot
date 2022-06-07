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
        
        this.scene.start("menu");

        //this.scene.start("total");
        
    }

    update(delta) {

    }

    loadIMG(){
        this.load.image('backgroundWS', './assets/MainWorkshop.png');
        this.load.image('backgroundSR', './assets/Shelves.png');
        this.load.image('require', './assets/UI/New_Orders.png');
        this.load.image('requireText', './assets/UI/Ticket.png');
      
        //Load Buttons
        this.load.image('backButt', './assets/UI/New_Back_Button.png');
        this.load.image('backButt', './assets/UI/New_Back_Button.png');
        this.load.image('sellButt', './assets/UI/SELLBUTTON.png');
        this.load.image('colButt', './assets/Color Changer/Color-Change.png');

        //Load Color Buttons
        this.load.image('BlackColor', './assets/New_Buttons/New_Black.png');
        this.load.image('BlueColor', './assets/New_Buttons/New_Blue.png');
        this.load.image('GoldColor', './assets/New_Buttons/New_Gold.png');
        this.load.image('GreenColor', './assets/New_Buttons/New_Green.png');
        this.load.image('OrangeColor', './assets/New_Buttons/New_Orange.png');
        this.load.image('PinkColor', './assets/New_Buttons/New_Pink.png');
        this.load.image('PurpleColor', './assets/New_Buttons/New_Purple.png');
        this.load.image('SilverColor', './assets/New_Buttons/New_Silver.png');
        this.load.image('TealColor', './assets/New_Buttons/New_Teal.png');

        //Load UI Elements
        
        this.load.image('Time_And_Money_UI', './assets/UI/Timer-And-Money.png');
        this.load.image('Inventory_Bar', './assets/UI/Parts-Bar.png');
        this.load.image('star', './assets/star.png');

        //Load Animations
        this.load.atlas('main_atlas', 'assets/Animations/MainMenu.png', 'assets/Animations/TitleScreen.json');

        this.load.atlas('door_atlas', 'assets/Animations/Door_Open.png', 'assets/Animations/door_open.json');
        this.load.atlas('bluespray_atlas', 'assets/Animations/blue_spray.png', 'assets/Animations/blue_spray.json');
        this.load.atlas('blackspray_atlas', 'assets/Animations/black_spray.png', 'assets/Animations/black_spray.json');
        this.load.atlas('greenspray_atlas', 'assets/Animations/green_spray.png', 'assets/Animations/green_spray.json');
        this.load.atlas('goldspray_atlas', 'assets/Animations/gold_spray.png', 'assets/Animations/gold_spray.json');
        this.load.atlas('orangespray_atlas', 'assets/Animations/orange_spray.png', 'assets/Animations/orange_spray.json');
        this.load.atlas('pinkspray_atlas', 'assets/Animations/pink_spray.png', 'assets/Animations/pink_spray.json');
        this.load.atlas('purplespray_atlas', 'assets/Animations/purple_spray.png', 'assets/Animations/purple_spray.json');
        this.load.atlas('silverspray_atlas', 'assets/Animations/silver_spray.png', 'assets/Animations/silver_spray.json');
        this.load.atlas('tealspray_atlas', 'assets/Animations/teal_spray.png', 'assets/Animations/teal_spray.json');
        this.load.atlas('sell_atlas', 'assets/Animations/robot_sell.png', 'assets/Animations/robot_sell.json');

        this.load.image('ResultScreen', './assets/ResultsScreen.png');
        this.load.image('ResultText', './assets/Results.png');
        this.load.image('mainMenu', './assets/menuButton.png');
        this.load.image('play','./assets/playButton.png');
        this.load.image('tutorial','./assets/ControlButton.png');
        this.load.image('settings','./assets/settingsButton.png');

        //Load Robot Parts
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
        this.load.bitmapFont('vcrBM', './assets/vcr_osd_mono_0.png', './assets/vcr_osd_mono.fnt');
    }

    loadSound(){
        this.load.audio('backgroundMusic', './assets/Mimi.mp3');
        this.load.audio('introMusic', './assets/My_Song_3.mp3');
        this.load.audio('star5', './assets/star5.mp3');
        this.load.audio('star4', './assets/star4.mp3');
        this.load.audio('star3', './assets/star3.mp3');
        this.load.audio('star2', './assets/star2.mp3');
        this.load.audio('star1', './assets/star1.mp3');

        this.load.audio('spray', './assets/spray.wav');
        this.load.audio('door', './assets/door.wav');
        

    }

}