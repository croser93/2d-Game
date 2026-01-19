let canvas;
let world;
let keyboard = new Keyboard;
let loadingProgress = 0;
let totalAssets = 0;
let loadedAssets = 0;
let gameStarted = false;
const IMAGE_CACHE = {};

function init() {
    preloadAllImages();
}

function preloadAllImages() {
    const allImages = [];
    Object.values(MOVABELS).forEach(category => {
        Object.values(category).forEach(value => {
            if (Array.isArray(value))
                allImages.push(...value);
        });
    });
    allImages.forEach(path => {
        const img = new Image();
        img.src = path;
        IMAGE_CACHE[path] = img;
    }); 
    return allImages.length;
}

function updateLoadingProgress() {
    loadedAssets++;
    loadingProgress = Math.round((loadedAssets / totalAssets) * 100);
    document.getElementById('loadingPercentage').textContent = loadingProgress + '%';
    document.getElementById('loadingBar').style.width = loadingProgress + '%';

    if (loadedAssets === totalAssets) {
        loadingScreen();
        initLevel();
        initWorld();
        gameStarted = true;
        setFooter()
        setMobilebuttons();
    }
}

function preloadAssets() {
    loadingScreen();
    totalAssets = preloadStartImg.length + preloadStartSound.length;
    loadedAssets = 0;
    preloadSound();
    preloadImg();

}

function preloadImg() {
    preloadStartImg.forEach(src => {
        const img = new Image();
        img.onload = updateLoadingProgress;
        img.onerror = updateLoadingProgress;
        img.src = src;
    }); 
}

function preloadSound(){
    preloadStartSound.forEach(src => {
        const audio = new Audio();
        audio.oncanplaythrough = updateLoadingProgress;
        audio.onerror = updateLoadingProgress;
        audio.src = src;
    });
}

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
    preloadAssets()
    mobileControls();


}

function setFooter() {
    if (window.innerWidth > 1025)
    document.getElementById('footerLine').classList.remove('dnone')
    // document.getElementById('footerLine').classList.add('dpf')
    
}

window.addEventListener('resize', checkScreenOrientation);
window.addEventListener('orientationchange', checkScreenOrientation);
document.addEventListener('DOMContentLoaded', () => {
    checkScreenOrientation();
    setMobilebuttons();
});

function checkScreenOrientation() {
    
    const switchScreen = document.getElementById('switchMobileDevice');
        if (window.innerHeight > window.innerWidth) {
            // switchScreen.classList.add('dpf');
            switchScreen.classList.remove('dnone');

        } 
        else {
            // switchScreen.classList.remove('dpf');
            switchScreen.classList.add('dnone');
        }

}

function setMobilebuttons() {
    const hud = document.getElementById('hud')
    const burger = document.getElementById('burgerBtn')
    if(window.innerWidth < 1200 && gameStarted == true){
            // hud.classList.add('dpf');
            hud.classList.remove('dnone');
            // burger.classList.add('dpf');
            burger.classList.remove('dnone');
        }else{
            // hud.classList.remove('dpf');
            hud.classList.add('dnone');
            // burger.classList.remove('dpf');
            burger.classList.add('dnone');
        }
    
    
}


function winOrLoseOverlay() {

const endboss = world.enemies.find(enemy => enemy instanceof Endboss);
        if (world.character.live <= 0 && world.character.dead) {
        winOrLosescreen('lose')
        clearAllIntervals()
        playSound(SOUNDS.character.DEAD)   
    }else if (world.character.live > 0 && endboss.dead) {
        winOrLosescreen('win')
        playSound(SOUNDS.character.WIN)   
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

function toggleSoundmode() {
    let soundIcon = document.getElementById('soundIcon');
    let soundIconBurger = document.getElementById('burgerSoundIcon')

    if (soundmodeON) {
        soundmodeON = false
        soundIcon.src = 'gameassets/img/icons/soundmute.png';
        soundIconBurger.src = 'gameassets/img/icons/soundmute.png';
        worldsound(SOUNDS.Worldsounds.BACKGROUNDSOUND)

    } else if (soundmodeON == false) {
        soundmodeON = true
        soundIcon.src = 'gameassets/img/icons/soundOn.png';
         soundIconBurger.src = 'gameassets/img/icons/soundOn.png';
        worldsound(SOUNDS.Worldsounds.BACKGROUNDSOUND)
    }
}

function fullscreen(){
    if(!document.fullscreenElement){
    document.getElementById('test').requestFullscreen();           
    } else exitFullscreen()
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

function toggleBurgerMenu() {
    document.getElementById('burgerDialog').classList.toggle('dnone')
}

function loadingScreen() {
    document.getElementById('loadingScreen').classList.toggle('dnone');
}
