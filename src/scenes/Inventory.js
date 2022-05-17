class Inventory extends Phaser.Scene {
    constructor() {
        super("inventory");
    }

    

    create() {

        
        console.log("Inventory open");

        this.part = new Object(this, 500,342, 'cute_h',['cool','cute'],0);

        this.part2 = new Object(this, 500,342, 'cute_b',['cool','cute'],1);

        this.part3 = new Object(this, 500,342, 'cute_a',['cool','cute'],2);

        this.part4 = new Object(this, 500,342, 'cute_l',['cool','cute'],3);

        this.part5 = new Object(this, 500,342, 'crafting',['cool','cute'],0);

        this.part6 = new Object(this, 500,342, 'crafting',['cool','cute'],0);

        console.log("length"+storeParts.length);

        
        this.input.on('drop', function (pointer, gameObject, dropZone) {
            if(storeParts.length<4){

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

                gameObject.setScale(.1);

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

        for(var i = 0; i < storeParts.length; i++){

            if ( storeParts[i] === gameObject) { 
    
                storeParts.splice(i, 1); 
            }

        }
        gameObject.setScale(.2);
        console.log("array length:"+ storeParts.length);
        

    });



    }

    update(delta) {
        

    }


}