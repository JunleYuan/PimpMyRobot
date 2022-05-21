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


        this.testText = this.add.text(0,-250,'Ticket').setOrigin(.5, .5);

        this.page = this.add.image(0, 0, 'requireText').setOrigin(.5, .5).setScale(2);
        // var ourGame = this.scene.get('buildMain');

        let textArray = [];

        for(let i = 0;i<numbRequire;i++){
            console.log(i);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            arrayOfRule[i] = this.whatTraits();
            textArray[i] = this.add.text(-170,-200+i*80,this.ranText(arrayOfRule[i])).setOrigin(0, .5);

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

        //console.log("what: "+this.CurTrait);

        this.ranTraits = Math.floor(Math.random() * this.CurTrait.length);

        this.yesNo = Math.floor(Math.random() * 2);

        let temptrait = this.CurTrait.slice(this.ranTraits+0,this.ranTraits+1);

        //console.log("temp:"+temptrait);

        this.CurTrait.splice(this.ranTraits, 1);

        return [temptrait,this.yesNo]
        
    }
    ranText( rule ){
        
        if(rule[1]){
            switch(Math.floor(Math.random() * 2)){

                case 0:

                    return 'We want our robots to be ' + rule[0]

                    break;

                case 1:

                    return  rule[0] + ' would be nice'

                    break;


            }

        }else{

            switch(Math.floor(Math.random() * 2)){

                case 0:

                    return 'I hate ' + rule[0]

                    break;

                case 1:

                    return 'It better not be '+ rule[0]

                    break;


            }




        }

    }


}