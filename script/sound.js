const SOUNDS = {
    character: {
        LONG_IDLE: {
            SOUND: new Audio('gameassets/sounds/snoring.mp3'),
            VOLUME: 0.2
        },
        WALKING: {
            SOUND: new Audio('gameassets/sounds/step.mp3'),
            VOLUME: 0.2
        },
        JUMPING: {
            SOUND: new Audio('gameassets/sounds/jump.mp3'),
            VOLUME: 1
        },
        HURT: {
            SOUND: new Audio('gameassets/sounds/hurt.mp3'),
            VOLUME: 0.5
        },
        DEAD: {
            SOUND: new Audio('/gameassets/sounds/dead.mp3'),
            VOLUME: 1
        },
        DAMAGE: {
            SOUND: new Audio('gameassets/sounds/damage.mp3'),
            VOLUME: 1
        }
    },
    collectables: {
        COIN: {
            SOUND: new Audio('gameassets/sounds/coin.mp3'),
            VOLUME: 0.5
        },
        MANA: {
            SOUND: new Audio('gameassets/sounds/mana.mp3'),
            VOLUME: 0.5
        },
        LIVE: {
            SOUND: new Audio('gameassets/sounds/life.mp3'),
            VOLUME: 0.5
        },
    },
    Worldsounds: {
        BACKGROUNDSOUND: {
            SOUND: new Audio('gameassets/sounds/backgroundambiente.mp3'),
            VOLUME: 0.1
        },

    }
};
let soundmodeON = false;

function playSound(sound){
    if (soundmodeON) { 
        soundSnipped = sound.SOUND
        volume = sound.VOLUME
        soundSnipped.volume = volume;
        soundSnipped.play();
    }
     }

function playSoundloop(sound){
    if (soundmodeON) { 
        soundSnipped = sound.SOUND.cloneNode(true);
        volume = sound.VOLUME
        soundSnipped.volume = volume; 
        soundSnipped.play();    
    } 
}

    function worldsound(sound)  {
        let soundSnipped = sound.SOUND
        volume = sound.VOLUME
        soundSnipped.volume = volume;
        if (soundmodeON) {
            soundSnipped.loop = true;
            soundSnipped.play();
        }else if (!soundmodeON){
            soundSnipped.pause();
            soundSnipped.loop = false;
        }
        
    }    
    
    function playSoundloopUnlimited(soundSnipped, longidle){   
        
         if (this.soundmodeON && longidle) { 
             soundSnipped.loop = true;
             soundSnipped.currentTime = 0;
             soundSnipped.play();
         }else{
             soundSnipped.pause();
             soundSnipped.currentTime = 0;
             soundSnipped.loop = false;
        }
     }
