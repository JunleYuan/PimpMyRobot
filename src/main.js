

let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    fps: {
        target: 60
    },
    physics: {
        default: 'arcade'
        
        
        
    },
    scene: [Loading, Menu, Tutorial, Credits, Settings, Workshop, UIScene, Rent, RequireList, Inventory, Storage,Total,Title, Day1, Day2, Day3,Day4,Final, TutorialDemo,Catalog]

    
}
    
let game = new Phaser.Game(config);

const centerX = game.config.width / 2;
const centerY = game.config.height / 2;
let cursors = null;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, pointLEFT;
let keyX;
//number of rules
var numbRequire = 1;

//detect which box should it be / scene
var whichScene = 4;

//number of sets of robot
var numbSet = 3;

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

//when entering storage room
var enterSR = false;
//parts in inventory
var storeParts = [];

//parts beening submited
var subParts = [];

//which level we are on
var lvl = 1;

var money = 0;

var rent = 40;

var timer = 60*2;

var total_money = 0;

var total_star = 0;

var sellready = false;

//ticket opened or closed
TpageOpen = false;