class Animal {  
    get sound() {
        return this._sound;
    }

    set sound(sound){
        this._sound = sound;
    } 

    speak(dialog) { 
        var text       = dialog.split(" ");
        var animalText = "";
        var prefix="";
        for(var index=0; index <text.length; index++){
            animalText += prefix+ text[index]+ " " + this._sound;
            prefix=" ";
        }
        return animalText;
    }
      

}

 
class Lion extends Animal{
    constructor(){
        super();
        this.sound="grrr";
    }
} 

var lion = new Lion();
lion.speak("Hello I am a Lion")
 