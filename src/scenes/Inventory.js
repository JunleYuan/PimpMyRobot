class Inventory extends Phaser.Scene {
    constructor() {
        super("inventory");
    }

    

    create() {

        
        console.log("Inventory open");

        //return button
        this.backbutt = this.add.image(0, 0, 'backButt').setOrigin(0, 0).setScale(1);
        this.backbutt.setInteractive();

        //this.backbutt.visible = false;

        this.backbutt.on('pointerdown', () => {
            newScene = true;
            this.visOff();
            //this.scene.start("buildMain");
            //this.scene.sleep("inventory");
            whichScene = 4;
            this.scene.wake("buildMain");

        });

        //sell button
        this.sellbutt = this.add.image(1280, 720, 'sellButt').setOrigin(1, 1).setScale(1);
        this.sellbutt.setInteractive();

        this.sellbutt.visible = false;

        this.sellbutt.on('pointerdown', () => {

            if(subParts.length == 4){

                // for(let i = 0; i< subParts.length;i++){
                //     console.log("end part"+subParts[i].which_part+" trait: "+ subParts[i].roboTraits[0]);
                    

                // }

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
                
            }
        });

        //color button
        this.colorbutt = this.add.image(900, 400, 'sellButt').setOrigin(1, 1).setScale(1);
        this.colorbutt.setInteractive();

        this.colorbutt.visible = false;

        this.colorbutt.on('pointerdown', () => {

            
            console.log("clicked");
            if(subParts.length == 4){

                

                if(curColor <9){
                    curColor = curColor + 1;

                }else{
                    curColor = 1;

                }
                console.log("cur color: "+curColor);
                
                for(var i = 0; i < subParts.length; i++){
                    subParts[i].setTexture(subParts[i].textureArray[curColor]);
                }
                
                

            }
        });

        this.Parts_1();

        // //add all parts needed
        // switch(lvl){
        //     case 1:
        //         numbSet = 2;
        //         this.Parts_1();

        //         break;
        //     case 2:
        //         numbSet = 2;
        //         this.Parts_1();

        //         break;
        //     case 3:

        //         numbSet = 3;
        //         this.Parts_1();
        //         this.Parts_2();

        //         break;
        //     case 4:

        //         numbSet = 3;
        //         this.Parts_1();
        //         this.Parts_2();

        //         break;
        //     case 5:

        //         numbSet = 3;
        //         this.Parts_1();
        //         this.Parts_2();
                

        //         break;
        //     case 6:

        //         numbSet = 3;
        //         this.Parts_1();
        //         this.Parts_2();
                

        //         break;
        // }

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

                    gameObject.x = 55;

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
            if(dropZone == subzone && gameObject.roboTraits[0] != 'trash' && whichScene == 4 && subParts.length<4){

                //check if type of parts is already in inventory
                var alreadyIn = false;
                for(var i = 0; i < subParts.length; i++){
                    if(subParts[i].which_part == gameObject.which_part){
                        alreadyIn = true;

                    }
                    
                }

                if(!alreadyIn){


                    gameObject.x = 1280/2;
                    gameObject.y = 720/2;

                    gameObject.isInSub = true;
                    gameObject.isInInventory = false;

                    subParts.push(gameObject);

                }

            }
            //console.log("in sub: "+ gameObject.isInSub+ " in inv:"+gameObject.isInInventory);
        });
        

        //  A drop zone
        var zone = this.add.zone(0, 362, 275, 490).setRectangleDropZone(275, 490);

        //  Just a visual display of the drop zone
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        //  A drop zone
        var subzone = this.add.zone(this.game.renderer.width/2, this.game.renderer.height/2, 250, 500).setRectangleDropZone(250, 500);

        //  Just a visual display of the drop zone
        var graphicssub = this.add.graphics();
        graphicssub.lineStyle(2, 0xffff00);
        graphicssub.strokeRect(subzone.x - subzone.input.hitArea.width / 2, subzone.y - subzone.input.hitArea.height / 2, subzone.input.hitArea.width, subzone.input.hitArea.height);


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
                    gameObject.setScale(.2);
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

        if(newScene){

            newScene = false;

            if(whichScene == 5){

                this.colorbutt.visible = false;
                this.backbutt.visible = true;
                
                for(let i = 0; i< this.allPartsArray.length;i++){
                    this.allPartsArray[i].visible = true;

                }

            }else if(whichScene != 4){
                this.colorbutt.visible = false;
                this.backbutt.visible = true;
                
                this.visOff();
                
                for(let i = 0; i < numbSet;i++){
                    
                    
                    if(this.allPartsArray[i*4+whichScene].isInSub == false)
                        this.allPartsArray[i*4+whichScene].visible = true;

                }

            }
            else{
                this.colorbutt.visible = true;
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

        
        // this.part9 = new Object(this, 500,342, 'sharp_h_n','sharp_h_j','sharp_h_t',['sharp'],0);
        // this.part9.visible = false;

        // this.part10 = new Object(this, 500,342, 'sharp_b_n','sharp_b_j','sharp_b_t',['sharp'],1);
        // this.part10.visible = false;

        // this.part11 = new Object(this, 500,342, 'sharp_a_n','sharp_a_j','sharp_a_t',['sharp'],2);
        // this.part11.visible = false;

        // this.part12 = new Object(this, 500,342, 'sharp_l_n','sharp_l_j','sharp_l_t',['sharp'],3);
        // this.part12.visible = false;

        // var temp = [this.part9,this.part10,this.part11,this.part12];

        // this.allPartsArray = this.allPartsArray.concat(temp);

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

    resetValue(){
        for(var i = 0; i < this.allPartsArray.length;i++){

        
            this.allPartsArray[i].x = this.getRandom(1280/2-300,1280/2+300);
            this.allPartsArray[i].y = this.getRandom(720/2-100,720/2+100);
        
            
            this.allPartsArray[i].isInInventory = false;
            this.allPartsArray[i].isInSub = false;
            this.allPartsArray[i].setScale(.2);
        }

        

    }


    givePoints(){


        let roundMoney = 0;
        // for(let i = 0; i<subParts.length;i++){


        //     subParts[i].x = this.getRandom(1280/2-300,1280/2+300);
        //     subParts[i].y = this.getRandom(720/2-100,720/2+100);
        // }

        for(let i = 0; i<arrayOfRule.length;i++){

            roundMoney = roundMoney + this.checkRule(arrayOfRule[i]);
        }

        if(curColor == colorRule){
            roundMoney = roundMoney + 10;

        }

        if(roundMoney>0){
            money = roundMoney + money;

        }

    }

    checkRule(rule){
        switch(rule[1]){

            //give money if don't have the trait
            case 0:

                for(let i = 0; i<subParts.length;i++){
                    //console.log(subParts[i].roboTraits);
                    if(subParts[i].roboTraits.filter(x => x==rule[0]).length > 0){
                        console.log("case 0 fail");
                        return 0
                    }
                    
                }
                console.log("case 0 pass");
                return 10

            
            //give money if the trait is there
            case 1:

                for(let i = 0; i<subParts.length;i++){
                    
                    if(subParts[i].roboTraits[0]==rule[0]){
                        console.log("case 1 pass");
                        return 10
                    }
                    
                }
                console.log("case 1 fail");
                return 0

            //if certain parts is curtain trait give money
            case 2:
                //console.log("rule: "+ rule[2]+ "case 2 index " + arrayOfPart.indexOf(rule[2]));

                for(let i = 0; i<subParts.length;i++){
                    if(subParts[i].which_part == arrayOfPart.indexOf(rule[2])){
                        if(subParts[i].roboTraits[0]==rule[0]){

                            console.log("case 2 pass");
                            return 10
                        }

                    }

                }
                
                console.log("case 2 fail");
                return 0

            
            //if condition is meet it's ok to have the trait
            case 3:

                console.log("rule0: "+ rule[0]+ " rule2: "+ rule[2]+ " rule3: "+ rule[3]);

                console.log("sub part: "+subParts[arrayOfPart.indexOf(rule[3])].roboTraits[0]);

                for(let i = 0; i<subParts.length;i++){
                    if(subParts[i].which_part == arrayOfPart.indexOf(rule[3])){
                        if(subParts[i].roboTraits[0]==rule[2]){

                            for(let j = 0; j<subParts.length;j++){
                                if(subParts[j].roboTraits.filter(x => x==rule[0]).length > 0){
                                    console.log("case 3 pass");
                                    return 20
                                }
                            }

                        }

                    }

                }
                console.log("case 3 fail");
                return 0
            
            //give money if there is 2 of a certain kind
            case 4:
                let countNumTrait = 0
                for(let i = 0; i<subParts.length;i++){
                    
                    if(subParts[i].roboTraits.filter(x => x==rule[0]).length > 0){
                        countNumTrait++;
                    }
                    
                }
                if(countNumTrait>1){
                    console.log("case 4 pass");
                    return 10
                }
                console.log("case 4 fail");
                return 0 


        }

    }

}