let canvas;
let world;
let keyboard = new Keyboard;



function initWorld() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard)
    ctx = canvas.getContext('2d')
}

    function startGame(){
        document.getElementById('test').classList.remove('test')
        document.getElementById('canvas').classList.remove('dnone')
        document.getElementById('mainButton').classList.add('dnone')
        document.body.style.backgroundImage = "url('gameassets/img/game-background-image.png')";
        initLevel();
        initWorld();
        mobileControls();
        mobilescreen();

    }

    function mobilescreen () {
        if (window.innerWidth < 1025) {
            document.querySelector('.hud').classList.remove('dnone')
            document.querySelector('.hud').classList.add('dpf')
        }
    }

    function winOrLoseOverlay() {
    
        const endboss = world.enemies.find(enemy => enemy instanceof Endboss);
              if (world.character.live <= 0 && world.character.dead) {
                winOrLosescreen('lose')
                clearAllIntervals()       
            }else if (world.character.live > 0 && endboss.dead) {
                winOrLosescreen('win')
                clearAllIntervals()
            }
            else  return;
    }

    function clearAllIntervals() {
        world.character.intervals.forEach(interval => clearInterval(interval));
        world.enemies.forEach(enemy => {
            enemy.intervals.forEach(interval => clearInterval(interval));
        });
        world.intervals.forEach(interval => clearInterval(interval));
    }

    function winOrLosescreen(result) {
        if(document.fullscreenElement){
            exitFullscreen()
        }
    setTimeout(() => {  
    document.getElementById('winOrLose').classList.remove('dnone')
    document.getElementById('winOrLose').innerHTML =
            `<div class="winScreen"> 
                <img  class="resultImage" src="./gameassets/img/${result}.png" alt="${result} screen">

                <button class="dialoCloseBtn" onclick="restartGame()"><img src="./gameassets/img/icons/button.png" alt=""></button>
            </div>`
    }, 1000);
    }

    function restartGame() {        
       levelGenerator ;
        level_1 ;
        document.getElementById('winOrLose').classList.add('dnone')
        document.getElementById('winOrLose').innerHTML = "";
        startGame()     
    }



window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) 
    keyboard.RIGHT = true  
    if (e.keyCode == 37) 
    keyboard.LEFT = true 
    if (e.keyCode == 38) 
    keyboard.UP = true      
    if (e.keyCode === 32 && !keyboard.SPACE_USED) {
        keyboard.SPACE = true;
        keyboard.SPACE_USED = true;
    } 
})

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) 
    keyboard.RIGHT = false  
    if (e.keyCode == 37) 
    keyboard.LEFT = false  
    if (e.keyCode == 38) 
    keyboard.UP = false  
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
    let soundIcon = document.getElementById('soundIcon');

    if (soundmodeON) {
        soundmodeON = false
        soundIcon.src = 'gameassets/img/icons/soundmute.png';
        worldsound(SOUNDS.Worldsounds.BACKGROUNDSOUND)

    } else if (soundmodeON == false) {
        soundmodeON = true
        soundIcon.src = 'gameassets/img/icons/soundOn.png';
        worldsound(SOUNDS.Worldsounds.BACKGROUNDSOUND)
    }
}

function fullscreen(){
    document.getElementById('canvas').requestFullscreen();           
}

function exitFullscreen(){
    document.exitFullscreen();           
}

function openInfoDialog() {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
}

function closeInfoDialog() {
    const dialog = document.querySelector('dialog');
    dialog.close();
}