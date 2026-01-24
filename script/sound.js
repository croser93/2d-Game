
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
            SOUND: new Audio('gameassets/sounds/dead.mp3'),
            VOLUME: 1
        },
        DAMAGE: {
            SOUND: new Audio('gameassets/sounds/damage.mp3'),
            VOLUME: 0.2
        },
        WIN: {
            SOUND: new Audio('gameassets/sounds/win.mp3'),
            VOLUME: 0.1
        }
    },
    enemies:{
        DEAD: {
            SOUND: new Audio('gameassets/sounds/aracher_dead.mp3'),
            VOLUME: 0.1
        },
    },
     devil:{
        DEAD: {
            SOUND: new Audio('gameassets/sounds/devil_dead.mp3'),
            VOLUME: 0.3
        },
    },
    boss:{
        SCREAM: {
            SOUND: new Audio('gameassets/sounds/boss.mp3'),
            VOLUME: 1
        },
        SLASH: {
            SOUND: new Audio('gameassets/sounds/boss_slashing.mp3'),
            VOLUME: 0.5
        },
        JUMP: {
            SOUND: new Audio('gameassets/sounds/bossjump.mp3'),
            VOLUME: 0.5
        },
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
            VOLUME: 0.2
        },

    }
};

const preloadStartSound = [
    'gameassets/sounds/backgroundambiente.mp3',
    'gameassets/sounds/coin.mp3',
    'gameassets/sounds/life.mp3',
    'gameassets/sounds/mana.mp3',
    'gameassets/sounds/step.mp3',
    'gameassets/sounds/damage.mp3',
    'gameassets/sounds/dead.mp3',
    'gameassets/sounds/snoring.mp3',
    'gameassets/sounds/jump.mp3',
    'gameassets/sounds/hurt.mp3',
    'gameassets/sounds/enemie.mp3',
    'gameassets/sounds/boss.mp3',
    'gameassets/sounds/boss_slashing.mp3',
    'gameassets/sounds/bossjump.mp3',
    'gameassets/sounds/win.mp3'
];
let soundmodeON = false;
let intervals = []

/**
 * Plays a sound once if sound mode is enabled.
 * @param {Object} sound - Object containing sound data.
 */
function playSound(sound) {
    if (!soundmodeON) return;

    const audio = sound.SOUND;
    audio.volume = sound.VOLUME;
    audio.loop = false;

    audio.play();

}

/**
 * Plays a cloned version of a sound so it can be played multiple times simultaneously.
 * @param {Object} sound - Object containing sound data.
 */
function playSoundclone(sound){
    if (soundmodeON) { 
        soundSnipped = sound.SOUND.cloneNode(true);
        volume = sound.VOLUME
        soundSnipped.volume = volume; 
        soundSnipped.play();    
    } 
}

/**
 * Plays or pauses a looping sound depending on whether sound mode is enabled.
 * @param {Object} sound - Object containing sound data.
 */
function playSoundloop(sound) {
    const audio = sound.SOUND;
    audio.volume = sound.VOLUME;
    audio.loop = true;

    if (soundmodeON && !audio.paused) return;

    if (soundmodeON) {
        audio.play();
    } else {
        audio.pause();
    }
}

/**
 * Controls a looping background/world sound based on the sound mode state.
 * @param {Object} sound - Object containing sound data.
 */
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

