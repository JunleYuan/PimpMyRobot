class Inventory extends Phaser.Scene {
    constructor() {
        super("inventory");
    }

    

    create() {
        //Create Animations.
        //Animation Frames for Each colored Spray.
        //Animations share similar structure to eachother.
        //Blue Spray Animation
        this.anims.create({ 
            key: 'Blue_spray', 
            frames: this.anims.generateFrameNames('bluespray_atlas', {      
                prefix: 'Blue_Spray_',
                start: 1,
                end: 23,
                suffix: '.png',
                zeroPad: 2
            }), 
            frameRate: 20,
            yoyo: 1
        });

        //Black Spray Animation
        this.anims.create({ 
            key: 'Black_spray', 
            frames: this.anims.generateFrameNames('blackspray_atlas', {      
                prefix: 'Black_Spray_',
                start: 1,
                end: 23,
                suffix: '.png',
                zeroPad: 2
            }), 
            frameRate: 20,
            yoyo: 1
        });

        //Gold Spray Animation
        this.anims.create({ 
            key: 'Gold_spray', 
            frames: this.anims.generateFrameNames('goldspray_atlas', {      
                prefix: 'Gold_Spray_',
                start: 1,
                end: 23,
                suffix: '.png',
                zeroPad: 2
            }), 
            frameRate: 20,
            yoyo: 1
        });


        //Green Spray Animation
        this.anims.create({ 
            key: 'Green_spray', 
            frames: this.anims.generateFrameNames('greenspray_atlas', {      
                prefix: 'Green_Spray_',
                start: 1,
                end: 23,
                suffix: '.png',
                zeroPad: 2
            }), 
            frameRate: 20,
            yoyo: 1
        });

        //Orange Spray Animation
        this.anims.create({ 
            key: 'Orange_spray', 
            frames: this.anims.generateFrameNames('orangespray_atlas', {      
                prefix: 'Orange_Spray_',
                start: 1,
                end: 23,
                suffix: '.png',
                zeroPad: 2
            }), 
            frameRate: 20,
            yoyo: 1
        });

        //Pink Spray Animation
        this.anims.create({ 
            key: 'Pink_spray', 
            frames: this.anims.generateFrameNames('pinkspray_atlas', {      
                prefix: 'Pink_Spray_',
                start: 1,
                end: 23,
                suffix: '.png',
                zeroPad: 2
            }), 
            frameRate: 20,
            yoyo: 1
        });

        //Purple Spray Animation
        this.anims.create({ 
            key: 'Purple_spray', 
            frames: this.anims.generateFrameNames('purplespray_atlas', {      
                prefix: 'Purple_Spray_',
                start: 1,
                end: 23,
                suffix: '.png',
                zeroPad: 2
            }), 
            frameRate: 20,
            yoyo: 1
        });

        //Silver Spray Animation
        this.anims.create({ 
            key: 'Silver_spray', 
            frames: this.anims.generateFrameNames('silverspray_atlas', {      
                prefix: 'Silver_Spray_',
                start: 1,
                end: 23,
                suffix: '.png',
                zeroPad: 2
            }), 
            frameRate: 20,
            yoyo: 1
        });

        //Teal Spray Animation
        this.anims.create({ 
            key: 'Teal_spray', 
            frames: this.anims.generateFrameNames('tealspray_atlas', {      
                prefix: 'Teal_Spray_',
                start: 1,
                end: 23,
                suffix: '.png',
                zeroPad: 2
            }), 
            frameRate: 20,
            yoyo: 1
        });


        //Sell Animations
        //Plays animation when the player sells the robots.
        this.anims.create({ 
            key: 'Sell Window', 
            frames: this.anims.generateFrameNames('sell_atlas', {      
                prefix: 'Sell_Vent_',
                start: 1,
                end: 16,
                suffix: '.png',
                zeroPad: 2
            }), 
            frameRate: 20,
            yoyo: 1
        });
        //end of animation of different colors


        //the spray animation
        this.spray = this.add.sprite(640, 360).setDepth(4);
        this.spray.visible = false;

        this.spray.on('animationcomplete', () => {
            this.spray.visible = false;
            
        });

        console.log("Inventory open");


        //the inventory img
        this.see_inv = this.add.image(0, 40, 'Inventory_Bar').setOrigin(0, 0).setScale(0.45,0.45).setDepth(1);



        //return button
        this.backbutt = this.add.image(0, 0, 'backButt').setOrigin(0, 0).setScale(0.65);
        this.backbutt.setInteractive();
        this.backbutt.on('pointerout', () => {
            this.backbutt.setScale(0.65); 
        });
        this.backbutt.on('pointerover', () => {
            this.backbutt.setScale(0.75); 
        });
        //this.backbutt.visible = false;

        this.backbutt.on('pointerdown', () => {
            newScene = true;
            this.visOff();
            //this.scene.start("buildMain");
            //this.scene.sleep("inventory");
            whichScene = 4;
            this.scene.wake("buildMain");
            this.scene.stop("storageBG");

        });

        //sell button

        sellready = true;
        this.sellbutt = this.add.image(1280, 720, 'sellButt3').setOrigin(1, 1).setScale(1).setDepth(4);
        this.sellbutt.setInteractive();

        this.sellbutt.visible = false;

        this.sellbutt.on('pointerdown', () => {

            if(subParts.length == 4){

                

                this.sellbutt.setTexture('sellButt2');
                this.spray.visible = true;
                this.spray.play('Sell Window');
                // for(let i = 0; i< subParts.length;i++){
                //     console.log("end part"+subParts[i].which_part+" trait: "+ subParts[i].roboTraits[0]);
                    

                // }
                this.time.delayedCall(1500, () => {
                    sellready = true;

                });
                this.time.delayedCall(900, () => {
                    this.sellbutt.setTexture('sellButt3');
                    
                    for(var i = 0; i < subParts.length; i++){
                        subParts[i].setTexture(subParts[i].textureArray[0]);
                    }
                    

                    //close ticket
                    TpageOpen = false;

                    this.givePoints();

                    //reset values
                    this.resetValue();

                    //empty inventory
                    storeParts = [];
                    subParts = [];

                    //reset vis
                    this.visOff();

                    var ticket = this.scene.get('requireList');

                    //this.scene.stop('requireList');
                    //this.scene.launch('requireList');

                    ticket.scene.restart();
                    
                    //this.scene.sleep("inventory");
                    this.scene.wake("buildMain");
                });
                
            }
        });

        //color button
        this.colorbutt = this.add.image(1280,720, 'colButt').setOrigin(1, 1).setScale(0.5);
        this.colorbutt.visible = false;

        this.blueButton = this.add.image(910, 240, 'BlueColor').setOrigin(1, 1).setScale(0.5);
        this.blueButton.setInteractive();
        this.blueButton.visible = false;
        this.bluetext = this.add.bitmapText(950, 405, 'gem_white', 'BLUE', 24, 1);
        this.bluetext.visible = false;

        this.blackButton = this.add.image(910, 280, 'BlackColor').setOrigin(1, 1).setScale(0.5);
        this.blackButton.setInteractive();
        this.blackButton.visible = false;
        this.blacktext = this.add.bitmapText(950, 405, 'gem_white', 'BLACK', 24, 1);
        this.blacktext.visible = false;

        this.goldButton = this.add.image(910, 320, 'GoldColor').setOrigin(1, 1).setScale(0.5);
        this.goldButton.setInteractive();
        this.goldButton.visible = false;
        this.goldtext = this.add.bitmapText(950, 405, 'gem_white', 'GOLD', 24, 1);
        this.goldtext.visible = false;

        this.greenButton = this.add.image(970, 240, 'GreenColor').setOrigin(1, 1).setScale(0.5);
        this.greenButton.setInteractive();
        this.greenButton.visible = false;
        this.greentext = this.add.bitmapText(950, 405, 'gem_white', 'GREEN', 24, 1);
        this.greentext.visible = false;

        this.pinkButton = this.add.image(970, 280, 'PinkColor').setOrigin(1, 1).setScale(0.5);
        this.pinkButton.setInteractive();
        this.pinkButton.visible = false;
        this.pinktext = this.add.bitmapText(950, 405, 'gem_white', 'PINK', 24, 1);
        this.pinktext.visible = false;

        this.orangeButton = this.add.image(970, 320, 'OrangeColor').setOrigin(1, 1).setScale(0.5);
        this.orangeButton.setInteractive();
        this.orangeButton.visible = false;
        this.orangetext = this.add.bitmapText(950, 405, 'gem_white', 'ORANGE', 24, 1);
        this.orangetext.visible = false;

        this.purpleButton = this.add.image(1030, 240, 'PurpleColor').setOrigin(1, 1).setScale(0.5);
        this.purpleButton.setInteractive();
        this.purpleButton.visible = false;
        this.purpletext = this.add.bitmapText(950, 405, 'gem_white', 'PURPLE', 24, 1);
        this.purpletext.visible = false;

        this.silverButton = this.add.image(1030, 280, 'SilverColor').setOrigin(1, 1).setScale(0.5);
        this.silverButton.setInteractive();
        this.silverButton.visible = false;
        this.silvertext = this.add.bitmapText(950, 405, 'gem_white', 'SILVER', 24, 1);
        this.silvertext.visible = false;

        this.tealButton = this.add.image(1030, 320, 'TealColor').setOrigin(1, 1).setScale(0.5);
        this.tealButton.setInteractive();
        this.tealButton.visible = false;
        this.tealtext = this.add.bitmapText(940, 405, 'gem_white', 'TURQUOISE', 24, 1);
        this.tealtext.visible = false;

        //Color Function For Blue Button
        this.blueButton.on('pointerdown', () => {
            console.log("clicked on blue button");
            if(subParts.length == 4){

                this.sound.play('spray');

                this.spray.visible = true;
                this.spray.play('Blue_spray');
                this.time.delayedCall(900, () => {
                    curColor = 2
                    console.log("cur color: "+curColor);
                    
                    for(var i = 0; i < subParts.length; i++){
                        subParts[i].setTexture(subParts[i].textureArray[curColor]);
                    }
                });
            }
        });
        this.blueButton.on('pointerout', () => {
            this.blueButton.setScale(0.5); 
            this.bluetext.visible = false;
          });
        this.blueButton.on('pointerover', () => {
            this.blueButton.setScale(0.55); 
            this.bluetext.visible = true;
        
        });



        //Color Function For Gold Button
        this.goldButton.on('pointerdown', () => {
            console.log("clicked on gold button");
            if(subParts.length == 4){

                this.sound.play('spray');

                this.spray.visible = true;
                this.spray.play('Gold_spray');
                this.time.delayedCall(900, () => {
                    curColor = 4;
                    console.log("cur color: "+curColor);
                    
                    for(var i = 0; i < subParts.length; i++){
                        subParts[i].setTexture(subParts[i].textureArray[curColor]);
                    }
                });
            }
        });
        this.goldButton.on('pointerout', () => {
            this.goldButton.setScale(0.5); 
            this.goldtext.visible = false;
          });
        this.goldButton.on('pointerover', () => {
            this.goldButton.setScale(0.55); 
            this.goldtext.visible = true;
        });
        


        //Color Functions for Green Button
        this.greenButton.on('pointerdown', () => {
            console.log("clicked on green button");
            if(subParts.length == 4){

                this.sound.play('spray');

                this.spray.visible = true;
                this.spray.play('Green_spray');
                this.time.delayedCall(900, () => {
                    curColor = 3
                    console.log("cur color: "+curColor);
                    
                    for(var i = 0; i < subParts.length; i++){
                        subParts[i].setTexture(subParts[i].textureArray[curColor]);
                    }
                });
            }
        });
        this.greenButton.on('pointerout', () => {
            this.greenButton.setScale(0.5); 
            this.greentext.visible = false;
          });
        this.greenButton.on('pointerover', () => {
            this.greenButton.setScale(0.55);
            this.greentext.visible = true; 
        });



        //Color Functions for Black Button
        this.blackButton.on('pointerdown', () => {
            console.log("clicked on black button");
            if(subParts.length == 4){

                this.sound.play('spray');

                this.spray.visible = true;
                this.spray.play('Black_spray');
                this.time.delayedCall(900, () => {
                    curColor = 1;
                    console.log("cur color: "+curColor);
                    
                    for(var i = 0; i < subParts.length; i++){
                        subParts[i].setTexture(subParts[i].textureArray[curColor]);
                    }
                });
            }
        });
        this.blackButton.on('pointerout', () => {
            this.blackButton.setScale(0.5); 
            this.blacktext.visible = false;
          });
        this.blackButton.on('pointerover', () => {
            this.blackButton.setScale(0.55); 
            this.blacktext.visible = true;
        });



        //Color Functions for Orange Button
        this.orangeButton.on('pointerdown', () => {
            console.log("clicked on orange button");
            if(subParts.length == 4){

                this.sound.play('spray');

                this.spray.visible = true;
                this.spray.play('Orange_spray');
                this.time.delayedCall(900, () => {
                    curColor = 5
                    console.log("cur color: "+curColor);
                    
                    for(var i = 0; i < subParts.length; i++){
                        subParts[i].setTexture(subParts[i].textureArray[curColor]);
                    }
                });
            }
        });
        this.orangeButton.on('pointerout', () => {
            this.orangeButton.setScale(0.5); 
            this.orangetext.visible = false;
          });
        this.orangeButton.on('pointerover', () => {
            this.orangeButton.setScale(0.55); 
            this.orangetext.visible = true;
        });



        //Color Function For Pink
        this.pinkButton.on('pointerdown', () => {
            console.log("clicked on Pink button");
            if(subParts.length == 4){

                this.sound.play('spray');

                this.spray.visible = true;
                this.spray.play('Pink_spray');
                this.time.delayedCall(900, () => {
                    curColor = 6;
                    console.log("cur color: "+curColor);
                    
                    for(var i = 0; i < subParts.length; i++){
                        subParts[i].setTexture(subParts[i].textureArray[curColor]);
                    }
                });
            }
        });
        this.pinkButton.on('pointerout', () => {
            this.pinkButton.setScale(0.5); 
            this.pinktext.visible = false;
          });
        this.pinkButton.on('pointerover', () => {
            this.pinkButton.setScale(0.55); 
            this.pinktext.visible = true;
        });


        //Color Functions for  Purple Button
        this.purpleButton.on('pointerdown', () => {
            console.log("clicked on purple button");
            if(subParts.length == 4){

                this.sound.play('spray');

                this.spray.visible = true;
                this.spray.play('Purple_spray');
                this.time.delayedCall(900, () => {
                    curColor = 7;
                    console.log("cur color: "+curColor);
                    
                    for(var i = 0; i < subParts.length; i++){
                        subParts[i].setTexture(subParts[i].textureArray[curColor]);
                    }
                });
            }
        });
        this.purpleButton.on('pointerout', () => {
            this.purpleButton.setScale(0.5); 
            this.purpletext.visible = false;
          });
        this.purpleButton.on('pointerover', () => {
            this.purpleButton.setScale(0.55); 
            this.purpletext.visible = true;
        });


        //Color Functions for Silver Button
        this.silverButton.on('pointerdown', () => {
            console.log("clicked on silver button");
            if(subParts.length == 4){

                this.sound.play('spray');

                this.spray.visible = true;
                this.spray.play('Silver_spray');
                this.time.delayedCall(900, () => {
                    curColor = 8
                    console.log("cur color: "+curColor);
                    
                    for(var i = 0; i < subParts.length; i++){
                        subParts[i].setTexture(subParts[i].textureArray[curColor]);
                    }
                });
            }
        });
        this.silverButton.on('pointerout', () => {
            this.silverButton.setScale(0.5); 
            this.silvertext.visible = false;
          });
        this.silverButton.on('pointerover', () => {
            this.silverButton.setScale(0.55); 
            this.silvertext.visible = true;
        });

        //Color Functions for Teal Button
        this.tealButton.on('pointerdown', () => {
            console.log("clicked on Teal button");
            if(subParts.length == 4){

                this.sound.play('spray');

                this.spray.visible = true;
                this.spray.play('Teal_spray');
                this.time.delayedCall(900, () => {
                    curColor = 9;
                    console.log("cur color: "+curColor);
                    
                    for(var i = 0; i < subParts.length; i++){
                        subParts[i].setTexture(subParts[i].textureArray[curColor]);
                    }
                });
            }
        });
        this.tealButton.on('pointerout', () => {
            this.tealButton.setScale(0.5); 
            this.tealtext.visible = false;
          });
        this.tealButton.on('pointerover', () => {
            this.tealButton.setScale(0.55); 
            this.tealtext.visible = true;
        });
        // //add all parts needed

        if(lvl < 3){
            numbSet = 2;
            this.Parts_1();

        }else{
            numbSet = 3;
            this.Parts_1();
            this.Parts_2();

        }

        //set random location and parts to boxes
        this.resetValue();
        
        this.input.on('drop', function (pointer, gameObject, dropZone) {

            
            //console.log(dropZone == zone);

            //if zone is inventory zone
            if(dropZone == zone && storeParts.length<4 && gameObject.roboTraits[0] != 'trash'){
                
                //console.log("dropped");

                //check if type of parts is already in inventory
                var alreadyIn = false;
                for(var i = 0; i < storeParts.length; i++){
                    //console.log("dropped: "+ storeParts[i].which_part);
                    if(storeParts[i].which_part == gameObject.which_part){
                        alreadyIn = true;
                        //console.log("already in inv");
                    }
                    
                }


                if(!alreadyIn){

                    gameObject.x = 50;

                    //gameObject.disableInteractive();

                    //gameObject.visible = false;

                    
                    gameObject.isInInventory = true;
                    gameObject.isInSub = false;

                    //console.log(gameObject.roboTraits);

                    storeParts.push(gameObject);
                    
                    //console.log("length"+storeParts.length);

                }
            }

            //if zone is submit zone
            if(dropZone == subzone && whichScene == 4 && subParts.length<4){

                //check if type of parts is already in inventory
                var alreadyIn = false;
                for(var i = 0; i < subParts.length; i++){
                    if(subParts[i].which_part == gameObject.which_part){
                        alreadyIn = true;

                    }
                    
                }

                if(!alreadyIn){


                    gameObject.isInSub = true;
                    gameObject.isInInventory = false;

                    subParts.push(gameObject);

                }

            }
            //console.log("in sub: "+ gameObject.isInSub+ " in inv:"+gameObject.isInInventory);
        });
        

        //  A drop zone for inventory
        var zone = this.add.zone(0, 362, 275, 470).setRectangleDropZone(295, 460);

        //  Just a visual display of the drop zone
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        graphics.visible = false;
        //  A drop zone
        var subzone = this.add.zone(this.game.renderer.width/2, this.game.renderer.height/2, 450, 500).setRectangleDropZone(450, 500);

        //  Just a visual display of the drop zone
        var graphicssub = this.add.graphics();
        graphicssub.lineStyle(2, 0xffff00);
        graphicssub.strokeRect(subzone.x - subzone.input.hitArea.width / 2, subzone.y - subzone.input.hitArea.height / 2, subzone.input.hitArea.width, subzone.input.hitArea.height);
        graphicssub.visible = false;

        this.input.on('dragenter', function (pointer, gameObject, dropZone) {
            
            if (dropZone == zone){

                graphics.clear();
                graphics.lineStyle(2, 0x00ffff);
                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
            
            }

            if (dropZone == subzone && whichScene == 4){

                graphicssub.clear();
                graphicssub.lineStyle(2, 0x00ffff);
                graphicssub.strokeRect(subzone.x - subzone.input.hitArea.width / 2, subzone.y - subzone.input.hitArea.height / 2, subzone.input.hitArea.width, subzone.input.hitArea.height);

            }



        });

        this.input.on('dragleave', function (pointer, gameObject, dropZone) {

            if (dropZone == zone){

                graphics.clear();
                graphics.lineStyle(2, 0xffff00);
                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);


                if(gameObject.roboTraits[0] != 'trash'){

                
                    for(var i = 0; i < storeParts.length; i++){

                        if ( storeParts[i] === gameObject) { 
                
                            storeParts.splice(i, 1); 
                        }

                    }
                    gameObject.setScale(.18);
                    gameObject.isInInventory = false;
                    //console.log("array length:"+ storeParts.length);
                }
            }

            if (dropZone == subzone && whichScene == 4){
                
                
                graphicssub.clear();
                graphicssub.lineStyle(2, 0xffff00);
                graphicssub.strokeRect(subzone.x - subzone.input.hitArea.width / 2, subzone.y - zone.input.hitArea.height / 2, subzone.input.hitArea.width, subzone.input.hitArea.height);
                
                if(gameObject.roboTraits[0] != 'trash'){

                
                    for(var i = 0; i < subParts.length; i++){

                        if ( subParts[i] === gameObject) { 
                
                            subParts.splice(i, 1); 
                        }

                    }
                    
                    gameObject.isInSub = false;
                    console.log("array length:"+ subParts.length);
                }

            }
        });

        newScene = true;

        //this.scene.sleep("inventory");

    }

    update(delta) {

        if(subParts.length == 4 && sellready){

            sellready = false;
            this.sellbutt.setTexture('sellButt');

        }

        if(newScene){

            console.log("update called");
            newScene = false;

            if(whichScene == 5){
                
                this.colorbutt.visible = false;
                
                this.blueButton.visible = false;
                this.blackButton.visible = false;
                this.greenButton.visible = false;
                this.goldButton.visible = false;
                this.orangeButton.visible = false;
                this.pinkButton.visible = false;
                this.purpleButton.visible = false;
                this.silverButton.visible = false;
                this.tealButton.visible = false;
                this.backbutt.visible = true;
                this.sellbutt.visible = false;
                
                this.visOff();
                
                for(let i = 0; i< this.allPartsArray.length;i++){
                    if(!this.allPartsArray[i].isInSub ){
                        this.allPartsArray[i].visible = true;
                    }
                    
                }

            }else if(whichScene != 4){
                this.colorbutt.visible = false;
               
                this.blueButton.visible = false;
                this.blackButton.visible = false;
                this.greenButton.visible = false;
                this.goldButton.visible = false;
                this.orangeButton.visible = false;
                this.pinkButton.visible = false;
                this.purpleButton.visible = false;
                this.silverButton.visible = false;
                this.tealButton.visible = false;
                this.backbutt.visible = true;
                
                this.visOff();
                
                for(let i = 0; i < numbSet;i++){
                    
                    
                    if(this.allPartsArray[i*4+whichScene].isInSub == false)
                        this.allPartsArray[i*4+whichScene].visible = true;

                }

            }
            else{
                this.colorbutt.visible = true;
            
                if(lvl > 1){
                    this.blueButton.visible = true;
                    this.blackButton.visible = true;
                    this.greenButton.visible = true;
                    this.goldButton.visible = true;
                    this.orangeButton.visible = true;
                    this.pinkButton.visible = true;
                    this.purpleButton.visible = true;
                    this.silverButton.visible = true;
                    this.tealButton.visible = true;
                }

                else{
                    
                    this.blueButton.visible = false;
                    this.blackButton.visible = false;
                    this.greenButton.visible = false;
                    this.goldButton.visible = false;
                    this.orangeButton.visible = false;
                    this.pinkButton.visible = false;
                    this.purpleButton.visible = false;
                    this.silverButton.visible = false;
                    this.tealButton.visible = false;
                }
              
                this.sellbutt.visible = true;
                this.backbutt.visible = false;
                this.sellbutt.visible = true;
                this.backbutt.visible = false;

                for(var i = 0; i < this.allPartsArray.length;i++){

                    if(this.allPartsArray[i].isInInventory == true || this.allPartsArray[i].isInSub == true){
                        this.allPartsArray[i].visible = true;
                    } 
                    

                }

            }

        }

    }

    //create parts
    Parts_1(){

        this.part = new Object(this, 500,342, 'cute_H_0',['cute'],0);
        this.part.visible = false;

        this.part2 = new Object(this, 500,342, 'cute_B_0',['cute'],1);
        this.part2.visible = false;

        this.part3 = new Object(this, 500,342, 'cute_A_0',['cute'],2);
        this.part3.visible = false;

        this.part4 = new Object(this, 500,342, 'cute_L_0',['cute'],3);
        this.part4.visible = false;

        
        this.part5 = new Object(this, 500,342, 'cool_H_0',['cool'],0);
        this.part5.visible = false;

        this.part6 = new Object(this, 500,342, 'cool_B_0',['cool'],1);
        this.part6.visible = false;

        this.part7 = new Object(this, 500,342, 'cool_A_0',['cool'],2);
        this.part7.visible = false;

        this.part8 = new Object(this, 500,342, 'cool_L_0',['cool'],3);
        this.part8.visible = false;

        this.allPartsArray = [this.part,this.part2,this.part3,this.part4,this.part5,this.part6,this.part7,this.part8];


        for(let j = 1; j < 10;j++){

            this.part.textureArray[j] = 'cute_H_'+j;

        }

        for(let j = 1; j < 10;j++){

            this.part2.textureArray[j] = 'cute_B_'+j;

        }
        for(let j = 1; j < 10;j++){

            this.part3.textureArray[j] = 'cute_A_'+j;

        }
        for(let j = 1; j < 10;j++){

            this.part4.textureArray[j] = 'cute_L_'+j;

        }

        for(let j = 1; j < 10;j++){

            this.part5.textureArray[j] = 'cool_H_'+j;

        }

        for(let j = 1; j < 10;j++){

            this.part6.textureArray[j] = 'cool_B_'+j;

        }
        for(let j = 1; j < 10;j++){

            this.part7.textureArray[j] = 'cool_A_'+j;

        }
        for(let j = 1; j < 10;j++){

            this.part8.textureArray[j] = 'cool_L_'+j;

        }

    }

    Parts_2(){

        
        this.part9 = new Object(this, 500,342, 'sharp_H_0',['sharp'],0);
        this.part9.visible = false;

        this.part10 = new Object(this, 500,342, 'sharp_B_0',['sharp'],1);
        this.part10.visible = false;

        this.part11 = new Object(this, 500,342, 'sharp_A_0',['sharp'],2);
        this.part11.visible = false;

        this.part12 = new Object(this, 500,342, 'sharp_L_0',['sharp'],3);
        this.part12.visible = false;

        var temp = [this.part9,this.part10,this.part11,this.part12];

        this.allPartsArray = this.allPartsArray.concat(temp);

        for(let j = 1; j < 10;j++){

            this.part9.textureArray[j] = 'sharp_H_'+j;

        }

        for(let j = 1; j < 10;j++){

            this.part10.textureArray[j] = 'sharp_B_'+j;

        }
        for(let j = 1; j < 10;j++){

            this.part11.textureArray[j] = 'sharp_A_'+j;

        }
        for(let j = 1; j < 10;j++){

            this.part12.textureArray[j] = 'sharp_L_'+j;

        }

    }


    shuffle(array){
        for (var i = array.length - 1; i > 0; i--) {
   
            // Generate random number
            var j = Math.floor(Math.random() * (i + 1));
                        
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
            
        return array;

    }

    visOff(){
        for (var i = 0; i < this.allPartsArray.length;i++) {

            if(!this.allPartsArray[i].isInInventory){

                this.allPartsArray[i].visible = false;
            }
        }

    }


    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }


    //reset location when finish with order
    resetValue(){
        for(var i = 0; i < this.allPartsArray.length;i++){

            let buffer = 0;

            //console.log(parseInt(i/4, 10));

            //console.log(i%4);

            if(i%4>2){
                buffer = -250;
                
            }else if(i%4>0){
                buffer = -80;

            }
        
            this.allPartsArray[i].x = 300+(i%4)*225;
            this.allPartsArray[i].y = buffer + 320 + 200*(parseInt(i/4, 10));
        
            
            this.allPartsArray[i].isInInventory = false;
            this.allPartsArray[i].isInSub = false;
            this.allPartsArray[i].setScale(.18);
        }

    }

    
    
    //give player points after completing order
    givePoints(){


        let roundMoney = 0;
        // for(let i = 0; i<subParts.length;i++){


        //     subParts[i].x = this.getRandom(1280/2-300,1280/2+300);
        //     subParts[i].y = this.getRandom(720/2-100,720/2+100);
        // }

        for(let i = 0; i<arrayOfRule.length;i++){

            roundMoney = roundMoney + this.checkRule(arrayOfRule[i]);
        }

        if(curColor == colorRule && lvl >1){
            roundMoney = roundMoney + 10;

        }

        if(roundMoney>0){
            this.sound.play('soldSound');
            money = roundMoney + money;

        }else{

            this.sound.play('nope');

        }

    }

    //make sure the order is correct 
    checkRule(rule){
        
        switch(rule[0]){
            case 1:
                // [case,trait,trait,part]
                for(let i = 0; i<subParts.length;i++){
                    
                    if(subParts[i].roboTraits[0] !=rule[2] && subParts[i].which_part == arrayOfPart.indexOf(rule[3])){

                        console.log("case 1 fail");
                        return 0;
                    }
                    if( subParts[i].roboTraits[0] !=rule[1] && subParts[i].which_part != arrayOfPart.indexOf(rule[3])){
                        console.log("case 1 fail");
                        return 0;

                    }
                    
                }
                console.log("case 1 pass");
                return 10
            
            case 2:
                // [case,trait,trait,part]
                for(let i = 0; i<subParts.length;i++){
                    
                    if(subParts[i].roboTraits[0] !=rule[2] && subParts[i].which_part == arrayOfPart.indexOf(rule[3])){

                        console.log("case 2 fail");
                        return 0;
                    }
                    if( subParts[i].roboTraits[0] !=rule[1] && subParts[i].which_part != arrayOfPart.indexOf(rule[3])){
                        console.log("case 2 fail");
                        return 0;

                    }
                    
                }
                console.log("case 2 pass");

                return 10

            case 3:

                // [case,trait,trait,part]
                for(let i = 0; i<subParts.length;i++){
                    
                    if(subParts[i].roboTraits[0] !=rule[2] && subParts[i].which_part == arrayOfPart.indexOf(rule[3])){

                        console.log("case 3 fail");
                        return 0;
                    }
                    if(subParts[i].roboTraits[0] !=rule[2] && subParts[i].which_part == arrayOfPart.indexOf(rule[4])){

                        console.log("case 3 fail");
                        return 0;
                    }
                    if( subParts[i].roboTraits[0] !=rule[1] && subParts[i].which_part != arrayOfPart.indexOf(rule[3])){
                        console.log("case 3 fail");
                        return 0;

                    }
                    
                }
                console.log("case 3 pass");

                return 10

                case 4:

                    // [case,trait,trait,part]
                    for(let i = 0; i<subParts.length;i++){
                        
                        if(subParts[i].roboTraits[0] !=rule[1] && subParts[i].which_part == arrayOfPart.indexOf(rule[4])){
    
                            console.log("case 4 fail");
                            return 0;
                        }
                        if(subParts[i].roboTraits[0] !=rule[1] && subParts[i].which_part == arrayOfPart.indexOf(rule[5])){
    
                            console.log("case 4 fail");
                            return 0;
                        }
                        if(subParts[i].roboTraits[0] !=rule[2] && subParts[i].which_part == arrayOfPart.indexOf(rule[6])){
    
                            console.log("case 4 fail");
                            return 0;
                        }
                        if(subParts[i].roboTraits[0] !=rule[3] && subParts[i].which_part == arrayOfPart.indexOf(rule[7])){
    
                            console.log("case 4 fail");
                            return 0;
                        }
                        
                        
                    }
                    console.log("case 4 pass");
    
                    return 10

            

                

                
        }

    }

}