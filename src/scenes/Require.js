class RequireList extends Phaser.Scene {
    constructor() {
        super("requireList");
    }

    

    create() {

        //format (trait, yes or no)

        switch(lvl){
            case 1:
                this.CurTrait = arrayOfTraits.slice(0,3);
                numbRequire = 1;

                break;
            case 2:
                this.CurTrait = arrayOfTraits.slice(0,3);
                numbRequire = 2;



                break;
            case 3:

                this.CurTrait = arrayOfTraits.slice(0,4);
                numbRequire = 3;

                break;
            case 4:

                this.CurTrait = arrayOfTraits.slice(0,4);
                numbRequire = 4;

                break;
            case 5:

                this.CurTrait = arrayOfTraits.slice(4,10);
                numbRequire = 4;

                break;
            case 6:

                this.CurTrait = arrayOfTraits.slice(4,10);
                numbRequire = 4;

                break;
        }
        //console.log(this.CurTrait);

        console.log("req open");

        this.notUseParts = ['head','body','arms','legs'];

        this.testText = this.add.bitmapText(0,-270, 'bm', 'Ticket', 32).setOrigin(.5, .5);

        

        this.page = this.add.image(0, 0, 'requireText').setOrigin(.5, .5).setScale(2);
        // var ourGame = this.scene.get('buildMain');

        let textArray = [];

        for(let i = 0;i<numbRequire;i++){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            arrayOfRule[i] = this.whatTraits();
            textArray[i] = this.add.bitmapText(-170,-200+i*80, 'bm', this.ranText(arrayOfRule[i]), 25).setOrigin(0, .5).setMaxWidth(380);

            

        }
        this.base = [this.page, this.testText];

        this.base = this.base.concat(textArray);

        this.container = this.add.container(this.game.renderer.width/2, this.game.renderer.height/2, this.base);

        this.container.setSize(this.page.width*2, this.page.height*2);

        this.container.setInteractive();
        this.input.setDraggable(this.container);

        this.container.on('drag', function (pointer, dragX, dragY) {

            this.x = dragX;
            this.y = dragY;


        });

        //console.log(this.CurTrait);

        this.scene.sleep("requireList");
    }

    update(delta) {
        this.scene.bringToTop();

    }
    
    whatTraits(){

        //var to see if trait is already in
        let alreadyin = false;
        //temp var to store yes and no if is already in
        let tempvar = 0;

        let ranTraits = Math.floor(Math.random() * this.CurTrait.length);

        //want or do not want traits
        let yesNo = Math.floor(Math.random() * 2);

        let temptrait = this.CurTrait.slice(ranTraits+0,ranTraits+1);


        //check if already in loop
        arrayOfRule.forEach(element => {
            //console.log("cur "+arrayOfTraits[ranTraits]);
            //console.log("ele "+element[0]);
            if(element[0] == arrayOfTraits[ranTraits]){
                alreadyin = true;
                //console.log("already in");
                tempvar = element[1];
            }
        });

        if(alreadyin){

            if(tempvar == 1 || tempvar == 2){

                switch(Math.floor(Math.random() * 2)){

                    case 0:

                        this.CurTrait.splice(ranTraits, 1);
                        return [temptrait,4]
                    
                    case 1:

                        let ranpart = Math.floor(Math.random() * this.notUseParts.length);

                        let temptrait2 = this.notUseParts.slice(ranpart+0,ranpart+1);

                        this.notUseParts.splice(ranTraits, 1);

                        return [temptrait,2,temptrait2]
                }  

            }else if(tempvar == 0){

                this.CurTrait.splice(ranTraits, 1);
                return [temptrait,3]

            }

            

        }

        

        

        return [temptrait,yesNo]
        
    }
    ranText( rule ){
        
        
        switch(rule[1]){

            case 1:
                switch(Math.floor(Math.random() * 2)){

                    case 0:

                        return 'We want our robots to be ' + rule[0]


                    case 1:

                        return  rule[0] + ' would be nice'



                }
            break;

            case 0:

                switch(Math.floor(Math.random() * 2)){

                    case 0:

                        return 'We hate ' + rule[0]


                    case 1:

                        return 'We do not like '+ rule[0]



                }
            break;

            case 2:

                return 'I want the '+ rule[2] + ' to be ' +  rule[0]


            case 3:

                return 'if there is even one part that is '+  rule[0]+' we are not paying'

            case 4:

                return 'we want at least 2 part that is ' + rule[0]


        }

    }


}