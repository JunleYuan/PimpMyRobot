class Tutorial extends Phaser.Scene {
    constructor() {
        super("tutorial");
    }

    preload() {

        this.load.image('background', './assets/menuBackground.png');
        this.load.image('mainMenu', './assets/menuButton.png');
    }

    create() {
        //background image
        this.background = this.add.image(0, 0, 'background').setOrigin(0, 0);

        //tutorial text
        let tutorialConfig = {
               fontFamily: 'Courier',
               fontSize: '36px',
               color: '#000000',
               align: 'left',
            }
        this.tutorText = this.add.text(32, 32, 'The goal of the game is to assemble robot parts \n to customer specifications as fast as you can. \n\n Customer orders will come in on tickets, and will \n tell you the kind of robot they want you to build. \n\n Assemble robots by dragging and dropping robot parts \n into the assembly area. \n\n Change the color of robots after placing all of their \n parts by clicking the button next to the assembly area. \n\n Once you are done creating the robot, click the \n sell button to send the robot to the customer. \n\n Robots that fit all of the customers specifications \n will get more money than robots that do not fit.', tutorialConfig);

        //back to main menu button
        this.menu = this.add.image(game.config.width/2, game.config.height - 72, 'mainMenu').setOrigin(0.5, 0.5).setInteractive();
        this.menu.on('pointerdown', () => {
            this.scene.start('menu'); 
          });
          this.menu.on('pointerout', () => {
            this.menu.setScale(1); 
          });
          this.menu.on('pointerover', () => {
            this.menu.setScale(1.1); 
          });
    }

    update() {

    }
}