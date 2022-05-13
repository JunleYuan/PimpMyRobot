

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
    scene: [Loading,Workshop ,Menu, Play,UIScene,Test, RequireList ]

    
}
    

let game = new Phaser.Game(config);

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, pointLEFT;

var numbRequire = 1;

