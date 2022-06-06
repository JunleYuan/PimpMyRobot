class Menu extends Phaser.Scene {
  constructor() {
    super("menu");
  }

  preload() {

    this.load.atlas('main_atlas', 'assets/MainMenu.png', 'assets/TitleScreen.json');

    this.load.image('ResultScreen', './assets/ResultsScreen.png');
    this.load.image('background', './assets/menuBackground.png');
    this.load.image('play', './assets/playButton.png');
    this.load.image('tutorial', './assets/tutorialButton.png');
    this.load.image('settings', './assets/settingsButton.png');

  }

  create() {
    //Title Screen Animation
    this.anims.create({
      key: 'title',
      frames: this.anims.generateFrameNames('main_atlas', {
        prefix: 'Title-10-FPS--',
        start: 1,
        end: 5,
        suffix: '.png',
        zeroPad: 1
      }),
      frameRate: 10,
      repeat: -1
    });

    this.titleScreen = this.add.sprite(0, 0).play('title').setOrigin(0, 0).setScale(0.5);

    //play button
    this.play = this.add.text(475, 550, ' ').setOrigin(0.5, 0.5).setInteractive();
    //this.play.setBackgroundColor('#DD002F');
    this.play.setDisplaySize(250, 150);
    this.play.on('pointerdown', () => {
      this.scene.start('loading');
    });


    //tutorial/controls button
    this.tutorial = this.add.text(800, 550, ' ').setOrigin(0.5, 0.5).setInteractive();
    //this.tutorial.setBackgroundColor('#DD002F');
    this.tutorial.setDisplaySize(250, 150);
    this.tutorial.on('pointerdown', () => {
      this.scene.start('tutorial');
    });
    

    // //settings button
    // this.settings = this.add.image(game.config.width / 2, game.config.height / 2 + 256, 'settings').setOrigin(0.5, 0.5).setInteractive();
    // this.settings.on('pointerdown', () => {
    //   this.scene.start('settings');
    // });
    // this.settings.on('pointerout', () => {
    //   this.settings.setScale(1);
    // });
    // this.settings.on('pointerover', () => {
    //   this.settings.setScale(1.1);
    // });

  }

  update() {

  }
}