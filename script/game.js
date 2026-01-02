let canvas;
let world;
let keyboard = new Keyboard;

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard)
    ctx = canvas.getContext('2d')
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

function toggleSoundmode () {
    const soundMode = world.soundmodeON
    world.soundmodeON = !world.soundmodeON;
    console.log(soundMode);  
}

function fullscreen(){
    document.getElementById('canvas').requestFullscreen();           
}