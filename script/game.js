let canvas;
let world;
let keyboard = new Keyboard;

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard)
    ctx = canvas.getContext('2d')
    toggleSoundmode()
}

window.addEventListener('keydown', (e) => {

    if (e.keyCode == 39) {
    keyboard.RIGHT = true  

    }
    if (e.keyCode == 37) {
    keyboard.LEFT = true  

    }
    if (e.keyCode == 38) {
    keyboard.UP = true  

    }
        
    if (e.keyCode === 32 && !keyboard.SPACE_USED) {
        keyboard.SPACE = true;
        keyboard.SPACE_USED = true;
    } 
})

window.addEventListener('keyup', (e) => {

    if (e.keyCode == 39) {
    keyboard.RIGHT = false 

    }
    if (e.keyCode == 37) {
    keyboard.LEFT = false  

    }
    if (e.keyCode == 38) {
    keyboard.UP = false  

    }
    if (e.keyCode === 32) {
        keyboard.SPACE = false;
        keyboard.SPACE_USED = false; 
    }    
})

function toggleSoundmode() {
    world.soundmodeON = !world.soundmodeON;
    world.sound.soundmodeON = world.soundmodeON;
    const soundIcon = document.getElementById('soundIcon');
    
    if (world.soundmodeON) {
        soundIcon.src = 'gameassets/img/icons/sound-svgrepo-com.svg';
        world.sound.backgroundSound(true)
    } else {
        soundIcon.src = 'gameassets/img/icons/sound-mute-svgrepo-com.svg';
        world.sound.backgroundSound(false)
    }
}

function fullscreen(){
    document.getElementById('canvas').requestFullscreen();           
}