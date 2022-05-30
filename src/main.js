

let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    fps: {
        target: 60,
        forceSetTimeOut: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:1200},
            debug: true
        }
        
    },
    scene: [Loading,Workshop,UIScene, RequireList,Inventory ]

    
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

var curColor = 0;

//the rule at the time
var arrayOfRule = [];

var colorRule;

//parts in inventory
var storeParts = [];

//parts beening submited
var subParts = [];

//which level we are on
var lvl = 5;

var money = 40;

var timer = 60*5;

//ticket opened or closed
TpageOpen = false;