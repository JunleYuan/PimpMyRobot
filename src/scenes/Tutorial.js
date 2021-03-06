class Tutorial extends Phaser.Scene {
	constructor() {
		super("tutorial");
	}

	create() {
		//background image
		this.background = this.add.image(0, 0, 'ResultScreen').setOrigin(0, 0).setScale(0.5);

		//tutorial text
		let tutorialConfig = {
			fontFamily: 'Courier',
			fontSize: '23px',
			color: '#000000',
			align: 'center',
		}
		//this.tutorText = this.add.text(200, 90, 'The goal of the game is to assemble robot parts \n to customer specifications as fast as you can. \n\n Customer orders will come in on tickets, and will \n tell you the kind of robot they want you to build. \n\n Assemble robots by dragging and dropping robot parts \n into the assembly area. \n\n Change the color of robots after placing all of their \n parts by clicking the button next to the assembly area. \n\n Once you are done creating the robot, click the \n sell button to send the robot to the customer. \n\n Robots that fit all of the customers specifications \n will get more money than robots that do not fit.', tutorialConfig);
		this.tutorText = this.add.bitmapText(320, 80, 'vcrBM', 'The goal of the game is to assemble robot parts to customer specifications as fast as you can.\n\nCustomer orders will come in on tickets from the orders panel, and will describe to you the kind of robot they want you to build.\n\nAssemble robots by dragging and dropping robot parts into the assembly area.\n\nChange the color of robots after placing all of their parts by clicking the color palette next to the assembly area.\n\nOnce you are done creating the robot, click the sell button to send the robot to the customer.\n\nRobots that fit all of the customers specifications will get more money than robots that do not fit.');
		this.tutorText.maxWidth = 640;

		//back to main menu button
		this.menu = this.add.image(game.config.width / 2, game.config.height - 120, 'mainMenu').setOrigin(0.5, 0.5).setScale(0.25).setInteractive();
		this.menu.on('pointerdown', () => {
			this.sound.play('buttSound');
			this.scene.stop('tutorial');
		});
		this.menu.on('pointerout', () => {
			this.menu.setScale(0.25);
		});
		this.menu.on('pointerover', () => {
			this.menu.setScale(0.35);
		});


	}

	update() {

	}
}