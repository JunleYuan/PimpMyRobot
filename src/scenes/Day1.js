class Day1 extends Phaser.Scene {
    constructor() {
        super("Day1Scene");

        
    }

    create() {
        // dialog constants
        this.DBOX_X = 600;			    // dialog box x-position
        this.DBOX_Y = 50;			    // dialog box y-position
        this.DBOX_FONT = 'gem_font';	// dialog box font key

        this.TEXT_X = 770;			// text w/in dialog box x-position
        this.TEXT_Y = 75;			// text w/in dialog box y-position
        this.TEXT_SIZE = 40;		// text font size (in pixels)
        this.TEXT_MAX_WIDTH = 500;	// max width of text within box

        this.SKIP_TEXT = '[Press X to Skip Dialogue]'
        this.SKIP_FONT = 'gem_white';	// dialog box font key

        this.NEXT_TEXT = '[Press SPACE to Continue]';	// text to display for next prompt
        this.NEXT_X = centerX + 620;			// next text prompt x-position
        this.NEXT_Y = 610;			// next text prompt y-position

        this.LETTER_TIMER = 1;		// # ms each letter takes to "type" onscreen

        // dialog variables
        this.dialogConvo = 0;			// current "conversation"
        this.dialogLine = 0;			// current line of conversation
        this.dialogSpeaker = null;		// current speaker
        this.dialogLastSpeaker = null;	// last speaker
        this.dialogTyping = false;		// flag to lock player input while text is "typing"
        this.dialogText = null;			// the actual dialog text
        this.nextText = null;			// player prompt text to continue typing
        

        // character variables
        this.laugh_andi = null;
        this.sad_andi = null;
        this.angry_andi = null;
        this.happy_andi = null;



        this.assembly_tutorial = null;
        this.color_tutorial = null;
        this.door_tutorial = null;
        this.inv_tutorial = null;
        this.workshop_tutorial = null;
        this.sell_tutorial = null;
        this.storage_tutorial = null;
        this.order_tutorial = null;
        this.drag_tutorial = null;
        this.tweenDuration = 150;

        this.OFFSCREEN_X = -800;        // x,y values to place characters offscreen
        this.OFFSCREEN_Y = 1000;
        // parse dialog from JSON file
        this.soundconfig = {
            mute: false,
            volume: .1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }

        this.sound.play('vacationMusic', this.soundconfig);


        this.hawaii = this.add.image(640,320,"Hawaii").setScale(0.5);
        this.border = this.add.image(640,360,"Phone_Border");
        this.dialog = this.cache.json.get('day1');
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        //console.log(this.dialog);

        // add dialog box sprite
        this.dialogbox = this.add.sprite(this.DBOX_X, this.DBOX_Y, 'Dialog_Box').setOrigin(0);

        // initialize dialog text objects (with no text)
        this.dialogText = this.add.bitmapText(this.TEXT_X, this.TEXT_Y, this.DBOX_FONT, '', this.TEXT_SIZE);
        this.nextText = this.add.bitmapText(this.NEXT_X, this.NEXT_Y, this.DBOX_FONT, '', this.TEXT_SIZE);

        // ready the character dialog images offscreen
        this.laugh_andi = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+720, 'Andi_Laugh').setOrigin(0, 1).setScale(0.5);
        this.sad_andi = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+720, 'Andi_Sad').setOrigin(0, 1).setScale(0.5);
        this.angry_andi = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+720, 'Andi_Angry').setOrigin(0, 1).setScale(0.5);
        this.happy_andi = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+720, 'Andi_Happy').setOrigin(0, 1);
      

        this.assembly_tutorial = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+720, 'Assembly_Tutorial').setOrigin(0, 1).setScale(0.5);
        this.color_tutorial = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+720, 'Color_Tutorial').setOrigin(0, 1).setScale(0.5);
        this.door_tutorial = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+620, 'Door_Tutorial').setOrigin(0, 1).setScale(0.65,0.55);
        this.workshop_tutorial = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+520, 'WS_Tutorial').setOrigin(0, 1).setScale(0.45, 0.65);
        this.inv_tutorial = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+600, 'Inv_Tutorial').setOrigin(0, 1).setScale(0.85,0.60);
        this.order_tutorial = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+570, 'Order_Tutorial').setOrigin(0, 1);
        this.storage_tutorial = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+570, 'Storage_Tutorial').setOrigin(0, 1).setScale(0.5,0.7);
        this.sell_tutorial = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+570, 'Sell_Tutorial').setOrigin(0, 1).setScale(0.75,0.65);
        this.drag_tutorial = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+570, 'Drag_Tutorial').setOrigin(0, 1).setScale(0.75,0.65);
        // input
        cursors = this.input.keyboard.createCursorKeys();
        this.skiptext = this.add.bitmapText(this.NEXT_X, this.NEXT_Y + 110, this.SKIP_FONT, this.SKIP_TEXT, this.TEXT_SIZE-3).setOrigin(1);
        // start dialog
        this.typeText();        
    }

    update() {
      
        // check for spacebar press
        if(Phaser.Input.Keyboard.JustDown(cursors.space) && !this.dialogTyping) {
            // trigger dialog
            this.sound.play('buttSound');
            this.typeText();
        }
       
        if(keyX.isDown) {
            this.game.sound.stopAll();
            this.scene.start("catalog");
        } 

        
    }

    typeText() {
        // lock input while typing
        this.dialogTyping = true;

        // clear text
        this.dialogText.text = '';
        this.nextText.text = '';

        /* Note: In my conversation data structure: 
                - each array within the main JSON array is a "conversation"
                - each object within a "conversation" is a "line"
                - each "line" can have 3 properties: 
                    1. a speaker (required)
                    2. the dialog text (required)
                    3. an (optional) flag indicating if this speaker is new
        */

        // make sure there are lines left to read in this convo, otherwise jump to next convo
        if(this.dialogLine > this.dialog[this.dialogConvo].length - 1) {
            this.dialogLine = 0;
            // I increment conversations here, but you could create logic to exit the dialog here
            this.dialogConvo++;
        }
        
        // make sure we haven't run out of conversations...
        if(this.dialogConvo >= this.dialog.length) {
            // here I'm simply "exiting" the last speaker and removing the dialog box,
            // but you could build other logic to change game states here
            console.log('End of Conversations');
            // tween out prior speaker's image
            if(this.dialogLastSpeaker) {
                this.tweens.add({
                    targets: this[this.dialogLastSpeaker],
                    x: this.OFFSCREEN_X ,
                    duration: this.tweenDuration,
                    ease: 'Linear'
                });
            }
            // make text box invisible
            this.dialogbox.visible = false;
            this.game.sound.stopAll();
            this.scene.start("catalog");

        } else {
            // if not, set current speaker
            this.dialogSpeaker = this.dialog[this.dialogConvo][this.dialogLine]['speaker'];
            // check if there's a new speaker (for exit/enter animations)
            if(this.dialog[this.dialogConvo][this.dialogLine]['newSpeaker']) {
                // tween out prior speaker's image
                if(this.dialogLastSpeaker) {
                    this.tweens.add({
                        targets: this[this.dialogLastSpeaker],
                        x: this.OFFSCREEN_X,
                        duration: this.tweenDuration,
                        ease: 'Linear'
                    });
                }
                // tween in new speaker's image
                this.tweens.add({
                    targets: this[this.dialogSpeaker],
                    x: this.DBOX_X - 550,
                    duration: this.tweenDuration,
                    ease: 'Linear'
                });
            }

            // build dialog (concatenate speaker + line of text)
            this.dialogLines =  'ANDI : ' + this.dialog[this.dialogConvo][this.dialogLine]['dialog'];

            // create a timer to iterate through each letter in the dialog text
            let currentChar = 0; 
            this.textTimer = this.time.addEvent({
                delay: this.LETTER_TIMER,
                repeat: this.dialogLines.length - 1,
                callback: () => { 
                    // concatenate next letter from dialogLines
                    this.dialogText.text += this.dialogLines[currentChar];
                    // advance character position
                    currentChar++;
                    // check if timer has exhausted its repeats 
                    // (necessary since Phaser 3 no longer seems to have an onComplete event)
                    if(this.textTimer.getRepeatCount() == 0) {
                        // show prompt for more text
                        this.nextText = this.add.bitmapText(this.NEXT_X, this.NEXT_Y, this.DBOX_FONT, this.NEXT_TEXT, this.TEXT_SIZE).setOrigin(1);
                        // un-lock input
                        this.dialogTyping = false;
                        // destroy timer
                        this.textTimer.destroy();
                    }
                },
                callbackScope: this // keep Scene context
            });
            
            // set bounds on dialog
            this.dialogText.maxWidth = this.TEXT_MAX_WIDTH;

            // increment dialog line
            this.dialogLine++;

            // set past speaker
            this.dialogLastSpeaker = this.dialogSpeaker;
        }
    }
}