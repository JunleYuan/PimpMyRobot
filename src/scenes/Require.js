class RequireList extends Phaser.Scene {
    constructor() {
        super("requireList");
    }

    create() {
        console.log("req open");

        arrayOfRule = [];

        //console.log(arrayOfRule);

        this.firstrule = true;


        this.CurTrait = arrayOfTraits.slice(0,3);


        //if level is below 3 don't add sharp
        if(lvl < 3){
            this.CurTrait.splice(this.CurTrait.indexOf(3), 1);

        }

        numbRequire = 1;


        this.notUseParts = ['head','body','arms','legs'];

        this.testText = this.add.bitmapText(0,-270, 'vcrBM', 'Ticket', 32).setOrigin(.5, .5);


        this.page = this.add.image(0, 0, 'requireText').setOrigin(.5, .5).setScale(1.5,1);
        // var ourGame = this.scene.get('buildMain');

        let textArray = [];

        let tlength = 0

        for(tlength; tlength<=numbRequire;tlength++){

            if(this.CurTrait.length == 0){

                console.log("ran out of traits");

                break;
            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            

            if(tlength!=numbRequire){
                arrayOfRule[tlength] = this.whatTraits();

                textArray[tlength] = this.add.bitmapText(-190,-150+tlength*80, 'vcrBM', this.ranText(arrayOfRule[tlength]), 25).setOrigin(0, .5).setMaxWidth(380);
                
            }else{

                if(lvl>1){

                    console.log("color rule");
                    textArray[tlength] = this.add.bitmapText(-190,-150+tlength*100, 'vcrBM', this.ranColor(), 25).setOrigin(0, .5).setMaxWidth(380);
                    
                }
            }
            

            //console.log("trait: "+ arrayOfRule[i][0] +" rule"+arrayOfRule[i][1]);

        }
        
        this.base = [this.page, this.testText];

        this.base = this.base.concat(textArray);

        this.container = this.add.container(this.game.renderer.width/2, this.game.renderer.height/2, this.base);

        this.container.setSize(430, 669);

        this.container.setInteractive();
        this.input.setDraggable(this.container);

        this.container.on('drag', function (pointer, dragX, dragY) {

            this.x = dragX;
            this.y = dragY;


        });


        // for(let i = 0; i< arrayOfRule.length; i++){
        //     console.log(arrayOfRule[i][0] + " :" + arrayOfRule[i][1] + " :" + arrayOfRule[i][2]+ " :" + arrayOfRule[i][3]);

        // }
        
        this.scene.sleep("requireList");
    }

    update(delta) {
        this.scene.bringToTop();

    }
    
    whatTraits(){

        // //console.log("whatTraits called");

        // //var to see if trait is already in
        // let alreadyin = false;
        // //temp var to store yes and no if is already in
        // let tempvar = 0;


        // let ranTraits = this.CurTrait[Math.floor(Math.random() * this.CurTrait.length)];

        // //want or do not want traits
        // let yesNo = Math.floor(Math.random() * 2);

        //let temptrait = this.CurTrait.slice(this.CurTrait.indexOf(ranTraits),this.CurTrait.indexOf(ranTraits)+1);


        // //check if already in loop
        // arrayOfRule.forEach(element => {
        //     //console.log("cur "+arrayOfTraits[ranTraits]);
        //     //console.log("cur "+ranTraits);
            
        //     //console.log("ele "+element[0]);
        //     if(element[0] == ranTraits){
                
        //         alreadyin = true;
        //         //console.log("already in");
        //         tempvar = element[1];
        //     }
        // });

        // //if trait is already in
        // if(alreadyin){

        //     //tempvar is the already existing trait's rule
        //     //check ranText's switch case to see what temp var match with what rule
        //     if(tempvar == 1 || tempvar == 2|| tempvar == 4){


        //         if(Math.random() > .5){

        //             let ranpart = this.notUseParts[Math.floor(Math.random() * this.notUseParts.length)];
                    
        //             //console.log(this.notUseParts);

        //             //console.log("ran part "+ranpart);

        //             this.notUseParts.splice(this.notUseParts.indexOf(ranpart), 1);

        //             //console.log(this.CurTrait);

        //             this.CurTrait.splice(this.CurTrait.indexOf(ranTraits), 1);

        //             //console.log(this.CurTrait);

        //             return [temptrait,2,ranpart]

        //         }else{


        //             return [temptrait,4]

        //         }
            

        //     }else if(tempvar == 0){

        //         let ranpart = this.notUseParts[Math.floor(Math.random() * this.notUseParts.length)];

        //         this.notUseParts.splice(this.notUseParts.indexOf(ranpart), 1);

        //         this.CurTrait.splice(this.CurTrait.indexOf(ranTraits), 1);

        //         let ranTraits2 = arrayOfTraits[Math.floor(Math.random() * arrayOfTraits.length)];

        //         return [temptrait,3,ranTraits2,ranpart]

        //     }

            

        // }

        // if(this.firstrule){

        //     this.firstrule = false;

        //     return [temptrait,1]

        // }
        
        // //if it's not already in rule, randomly deside of we want the trait or not
        // return [temptrait,yesNo]

        if(lvl == 1){

            let ranTraits = this.CurTrait[Math.floor(Math.random() * this.CurTrait.length)];
            let temptrait = this.CurTrait.slice(this.CurTrait.indexOf(ranTraits),this.CurTrait.indexOf(ranTraits)+1);

            this.CurTrait.splice(this.CurTrait.indexOf(ranTraits), 1);

            let ranpart = this.notUseParts[Math.floor(Math.random() * this.notUseParts.length)];
            this.notUseParts.splice(this.notUseParts.indexOf(ranpart), 1);

            let ranTraits2 = this.CurTrait[Math.floor(Math.random() * this.CurTrait.length)];

            return [1 ,temptrait,ranTraits2,ranpart]

        }else if(lvl == 2){

            let ranTraits = this.CurTrait[Math.floor(Math.random() * this.CurTrait.length)];
            let temptrait = this.CurTrait.slice(this.CurTrait.indexOf(ranTraits),this.CurTrait.indexOf(ranTraits)+1);

            this.CurTrait.splice(this.CurTrait.indexOf(ranTraits), 1);

            let ranpart = this.notUseParts[Math.floor(Math.random() * this.notUseParts.length)];
            this.notUseParts.splice(this.notUseParts.indexOf(ranpart), 1);

            let ranTraits2 = this.CurTrait[Math.floor(Math.random() * this.CurTrait.length)];
            let temptrait2 = this.CurTrait.slice(this.CurTrait.indexOf(ranTraits2),this.CurTrait.indexOf(ranTraits2)+1);

            return [2 ,temptrait,temptrait2,ranpart]
        }else if(lvl == 3){

            let ranTraits = this.CurTrait[Math.floor(Math.random() * this.CurTrait.length)];
            let temptrait = this.CurTrait.slice(this.CurTrait.indexOf(ranTraits),this.CurTrait.indexOf(ranTraits)+1);

            this.CurTrait.splice(this.CurTrait.indexOf(ranTraits), 1);

            let ranpart = this.notUseParts[Math.floor(Math.random() * this.notUseParts.length)];
            this.notUseParts.splice(this.notUseParts.indexOf(ranpart), 1);

            let ranpart2 = this.notUseParts[Math.floor(Math.random() * this.notUseParts.length)];
            this.notUseParts.splice(this.notUseParts.indexOf(ranpart2), 1);

            let ranTraits2 = this.CurTrait[Math.floor(Math.random() * this.CurTrait.length)];
            let temptrait2 = this.CurTrait.slice(this.CurTrait.indexOf(ranTraits2),this.CurTrait.indexOf(ranTraits2)+1);



            return [3 ,temptrait,temptrait2,ranpart,ranpart2]


        }else{

            let ranTraits = this.CurTrait[Math.floor(Math.random() * this.CurTrait.length)];
            let temptrait = this.CurTrait.slice(this.CurTrait.indexOf(ranTraits),this.CurTrait.indexOf(ranTraits)+1);

            let ranTraits2 = this.CurTrait[Math.floor(Math.random() * this.CurTrait.length)];
            let temptrait2 = this.CurTrait.slice(this.CurTrait.indexOf(ranTraits2),this.CurTrait.indexOf(ranTraits2)+1);

            let ranTraits3 = this.CurTrait[Math.floor(Math.random() * this.CurTrait.length)];
            let temptrait3 = this.CurTrait.slice(this.CurTrait.indexOf(ranTraits3),this.CurTrait.indexOf(ranTraits3)+1);


            let ranpart = this.notUseParts[Math.floor(Math.random() * this.notUseParts.length)];
            this.notUseParts.splice(this.notUseParts.indexOf(ranpart), 1);

            let ranpart2 = this.notUseParts[Math.floor(Math.random() * this.notUseParts.length)];
            this.notUseParts.splice(this.notUseParts.indexOf(ranpart2), 1);

            let ranpart3 = this.notUseParts[Math.floor(Math.random() * this.notUseParts.length)];
            this.notUseParts.splice(this.notUseParts.indexOf(ranpart3), 1);

            let ranpart4 = this.notUseParts[Math.floor(Math.random() * this.notUseParts.length)];
            this.notUseParts.splice(this.notUseParts.indexOf(ranpart4), 1);



            return [4 ,temptrait,temptrait2,temptrait3,ranpart,ranpart2,ranpart3,ranpart4]
        }

        

        
    }

    
    ranColor(){

        let pickColor = Math.floor(Math.random() * (10 - 1) + 1);

        console.log(pickColor);

        colorRule = pickColor;

        switch(pickColor){
            case 1:

                return 'We want the color to be Black'

            case 2:

                return 'We want the color to be Blue'

            case 3:

                return 'We want the color to be Camo'


            case 4:

                return 'We want the color to be Gold'



            case 5:

                return 'We want the color to be Orange'

            case 6:

                return 'We want the color to be Pink'


            case 7:

                return 'We want the color to be Purple'

            case 8:

                return 'We want the color to be Silver'

            case 9:

                return 'We want the color to be Turquoise'

        }

    }


    ranText( rule ){
        
        
        switch(rule[0]){

            case 1:
                

                return 'I want a '+ rule[1] + ' robot with '+ rule[2] + ' '+rule[3]

            case 2:

                return 'I want a ' + rule[1] + ' robot with ' + rule[2] + ' '+rule[3]


            case 3:

                return 'I want a ' + rule[1] + ' robot but I also want it to have ' + rule[2] + ' '+ rule[3] + ' and ' + rule[2] + ' '+ rule[4]

            case 4:

                return 'I want the robot\'s '+ rule[4] + ' and ' + rule[5] + ' to be ' + rule[1] + ', with ' + rule[2]+ ' ' + rule[6] +' and ' + rule[3]+ ' ' + rule[7]


        }

    }


}