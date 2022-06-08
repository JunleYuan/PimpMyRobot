class Catalog extends Phaser.Scene {
    constructor() {
        super("catalog");
    }
    create() {
        
            this.soundconfig = {
                mute: false,
                volume: .1,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            }

            this.sound.play('WaitingMusic', this.soundconfig);

            this.CatalogDay1 = this.add.image(0, 0, 'Catalog_Day1').setOrigin(0, 0);
            this.CatalogDay2 = this.add.image(0, 0, 'Catalog_Day2').setOrigin(0, 0);
            this.CatalogDay3 = this.add.image(0, 0, 'Catalog_Day3').setOrigin(0, 0);
            this.CatalogDay4 = this.add.image(0, 0, 'Catalog_Day4').setOrigin(0, 0);
           

            if(lvl == 1){
                this.CatalogDay1.visible = true;
                this.CatalogDay2.visible = false;
                this.CatalogDay3.visible = false;
                this.CatalogDay4.visible = false;
            }
            else if(lvl == 2){
                this.CatalogDay1.visible = false;
                this.CatalogDay2.visible = true;
                this.CatalogDay3.visible = false;
                this.CatalogDay4.visible = false;
            }
            else if(lvl == 3){
                this.CatalogDay1.visible = false;
                this.CatalogDay2.visible = false;
                this.CatalogDay3.visible = true;
                this.CatalogDay4.visible = false;
            }
            else if(lvl == 4){
                this.CatalogDay1.visible = false;
                this.CatalogDay2.visible = false;
                this.CatalogDay3.visible = false;
                this.CatalogDay4.visible = true;
            }

            this.PlayButton = this.add.image(1000, 500, 'StartDay_Button').setOrigin(0, 0).setScale(0.25).setInteractive();

          
            this.PlayButton.on('pointerdown', () => {
            
                this.game.sound.stopAll();
                this.sound.play('buttSound');
                this.scene.start("UIScene");
                this.scene.start("buildMain");
                this.scene.start("inventory");
                
            });

            this.PlayButton.on('pointerout', () => {
                this.PlayButton.setScale(0.25); 
              });
              this.PlayButton.on('pointerover', () => {
                this.PlayButton.setScale(0.3); 
              });
        }
}
    