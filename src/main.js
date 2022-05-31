

let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    fps: {
        target: 60
    },
    physics: {
        default: 'arcade',
        
        
    },
    scene: [Loading,Workshop,UIScene,Rent, RequireList,Inventory ]

    
}
    

let game = new Phaser.Game(config);

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, pointLEFT;

//number of rules
var numbRequire = 1;

//detect which box should it be / scene
var whichScene = 4;

//number of sets of robot
var numbSet = 2;

//all traits
var arrayOfTraits = ['cute','cool','sharp'];

//all parts
var arrayOfPart = ['head','body','arms','legs'];

//the rule at the time
var arrayOfRule = [];

//current robo color
var curColor = 0;

//what color the robo needs to be
var colorRule;

//when entering new scene
var newScene = false;

//parts in inventory
var storeParts = [];

//parts beening submited
var subParts = [];

//which level we are on
var lvl = 1;

var money = 0;

var rent = 40;

var timer = 70;

//ticket opened or closed
TpageOpen = false;