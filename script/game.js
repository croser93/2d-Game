let canvas;
let world;
let keyboard = new Keyboard;

function initWorld() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard)
    ctx = canvas.getContext('2d')
    toggleSoundmode()
}

    function startGame(){
        document.getElementById('startGame').classList.add('dnone')
        document.getElementById('canvas').classList.remove('dnone')
        document.body.style.backgroundImage = "url('gameassets/img/game-background-image.png')";
        initLevel ()
        initWorld()
        mobileControls()

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
function mobileControls() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

        document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
        document.getElementById('btnUp').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    document.getElementById('btnUp').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });
        document.getElementById('btnAttack').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnAttack').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
}







function toggleSoundmode() {
    world.soundmodeON = !world.soundmodeON;
    world.sound.soundmodeON = world.soundmodeON;
    const soundIcon = document.getElementById('soundIcon');
    
    if (world.soundmodeON) {
        soundIcon.src = 'gameassets/img/icons/soundOn.png';
        // world.sound.backgroundSound(true)
    } else {
        soundIcon.src = 'gameassets/img/icons/soundOff.png';
        world.sound.backgroundSound(false)
    }
}

function fullscreen(){
    document.getElementById('canvas').requestFullscreen();           
}

function openInfoDialog() {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
}

function closeInfoDialog() {
    const dialog = document.querySelector('dialog');
    dialog.close();
}