//Made by Junle Yuan.
//it took more than 15 hours but not sure how much
//   04/15

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]

    
}
    

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 20;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, pointLEFT;

var high_score = 0;

//Track highscore (5)

//(copyright-free) background music to the Play scene (5)

//increase speed after 30 sec (5)

//Display the time remaining (in seconds) on the screen (10)

//Replace the UI borders with new artwork (10)

//Create a new title screen (e.g., new artwork, typography, layout) (10)

//Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)

//Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 

//Implement mouse control for player movement and mouse click to fire (20)

//Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (20)

