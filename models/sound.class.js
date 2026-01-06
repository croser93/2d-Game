class Sound {
    backgroundMusic = new Audio('gameassets/sounds/gamemusic-6082.mp3')

    coinSound = new Audio('gameassets/sounds/coin.mp3');
    lifeSound = new Audio('gameassets/sounds/life.mp3');
    manaSound = new Audio('gameassets/sounds/mana.mp3');

    stepSound = new Audio('gameassets/sounds/step.mp3');
    walkSound = new Audio('gameassets/sounds/step.mp3');

    damageSound = new Audio('gameassets/sounds/damage.mp3')
    attackSound = new Audio('gameassets/sounds/designed-fire-impacts-complex-04-118165.mp3')
    deadSound = new Audio('gameassets/sounds/dead.mp3')

    soundmodeON;

    constructor() {
        this.backgroundSound()
    }

    playSound(sound){
        if (this.soundmodeON) {
        sound.play();
               }
    }
    
    playSoundloop(soundSnipped){
     if (this.soundmodeON) {
        const sound = soundSnipped.cloneNode(true);
          sound.play();
        }  
    }


    backgroundSound(){
        if (this.soundmodeON) {
            this.backgroundMusic.play();
        }
        else {
        this.backgroundMusic.pause();
        }
    }
}