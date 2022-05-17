class Inventory extends Phaser.Scene {
    constructor() {
        super("inventory");
    }

    

    create() {

        
        console.log("Inventory open");

        this.backbutt = this.add.image(0, 0, 'backButt').setOrigin(0, 0).setScale(1);
        this.backbutt.setInteractive();

        this.backbutt.on('pointerdown', () => {
            this.visOff();
            //this.scene.start("buildMain");
            this.scene.sleep("inventory");
            this.scene.wake("buildMain");

        });

        this.allParts();

        this.todayPartOrder = this.shuffle(this.allPartsArray);

        this.trash = new Trash(this, 500,342, 'crafting');


        console.log("length"+storeParts.length);

        
        this.input.on('drop', function (pointer, gameObject, dropZone) {

            var alreadyIn = false;

            for(var i = 0; i < storeParts.length; i++){
                if(storeParts[i].which_part == gameObject.which_part){
                    alreadyIn = true;

                }
                
            }

            if(storeParts.length<4 && !alreadyIn&& gameObject.roboTraits[0] != 'trash'){

                gameObject.x = 55;
                switch(gameObject.which_part){

                    case 0:
    
                        gameObject.y = 200;
    
                        break;
    
                    case 1:
    
                        gameObject.y = 240;
    
                        break;
                    case 2:

                        gameObject.y = 350;
    
                        break;

                    case 3:

                        gameObject.y = 380;
    
                        break;
    
    
                }

                //gameObject.disableInteractive();

                //gameObject.visible = false;

                gameObject.setScale(.1);
                gameObject.isInInventory = true;

                console.log(gameObject.roboTraits);

                storeParts.push(gameObject);
                
                console.log("length"+storeParts.length);

            }
    
        });
        

            //  A drop zone
        var zone = this.add.zone(0, 300, 250, 500).setRectangleDropZone(250, 500);

        //  Just a visual display of the drop zone
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);


        this.input.on('dragenter', function (pointer, gameObject, dropZone) {

            graphics.clear();
            graphics.lineStyle(2, 0x00ffff);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        });

        this.input.on('dragleave', function (pointer, gameObject, dropZone) {

            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

            if(gameObject.roboTraits[0] != 'trash'){

            
                for(var i = 0; i < storeParts.length; i++){

                    if ( storeParts[i] === gameObject) { 
            
                        storeParts.splice(i, 1); 
                    }

                }
                gameObject.setScale(.2);
                gameObject.isInInventory = false;
                console.log("array length:"+ storeParts.length);
            }
            

        });

        this.scene.sleep("inventory");

    }

    update(delta) {

        for(var i = 0; i < numbSet;i++){

            this.allPartsArray[i+(whichScene)*numbSet].visible = true;

        }


    }

    allParts(){

        this.part = new Object(this, 500,342, 'cute_h',['cute'],0);
        this.part.visible = false;

        this.part2 = new Object(this, 500,342, 'cute_b',['cute'],1);
        this.part2.visible = false;

        this.part3 = new Object(this, 500,342, 'cute_a',['cute'],2);
        this.part3.visible = false;

        this.part4 = new Object(this, 500,342, 'cute_l',['cute'],3);
        this.part4.visible = false;

        this.part5 = new Object(this, 500,342, 'cool_h',['cool'],0);
        this.part5.visible = false;

        this.part6 = new Object(this, 500,342, 'cool_b',['cool'],1);
        this.part6.visible = false;

        this.part7 = new Object(this, 500,342, 'cool_a',['cool'],2);
        this.part7.visible = false;

        this.part8 = new Object(this, 500,342, 'cool_l',['cool'],3);
        this.part8.visible = false;

        this.allPartsArray = [this.part,this.part2,this.part3,this.part4,this.part5,this.part6,this.part7,this.part8];

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

            if(!this.allPartsArray[i].isInInventory)
                this.allPartsArray[i].visible = false;
        }

    }

    


}