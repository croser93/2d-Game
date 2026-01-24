let canvas;
let world;
let keyboard = new Keyboard;
let loadingProgress = 0;
let totalAssets = 0;
let loadedAssets = 0;
let gameStarted = false;
const IMAGE_CACHE = {};

/**
 * Initializes the game by preloading all images.
 */
    function init() {
        preloadAllImages();
    }

/**
 * Preloads all movable object images and caches them.
 * @returns {number} The total number of images to preload.
 */
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

/**
 * Updates the loading progress bar and percentage display.
 */
    function updateLoadingProgress() {
        loadedAssets++;
        loadingProgress = Math.round((loadedAssets / totalAssets) * 100);
        document.getElementById('loadingPercentage').textContent = loadingProgress + '%';
        document.getElementById('loadingBar').style.width = loadingProgress + '%';

        if (loadedAssets === totalAssets) {
            loadingScreen();
            initLevel();
            initWorld();
            setBtn('mobileBtn')
            gameStarted = true;
            startGameButtons();
            mobileControls();
        }
    }

/**
 * Preloads essential game assets including images and sounds.
 */
    function preloadAssets() {
        loadingScreen();
        totalAssets = preloadStartImg.length + preloadStartSound.length;
        loadedAssets = 0;
        preloadSound();
        preloadImg();
    }

/**
 * Preloads all startup images.
 */
    function preloadImg() {
        preloadStartImg.forEach(src => {
            const img = new Image();
            img.onload = updateLoadingProgress;
            img.onerror = updateLoadingProgress;
            img.src = src;
        }); 
    }

/**
 * Preloads all startup sounds.
 */
    function preloadSound(){
        preloadStartSound.forEach(src => {
            const audio = new Audio();
            audio.oncanplaythrough = updateLoadingProgress;
            audio.onerror = updateLoadingProgress;
            audio.src = src;
        });
    }

/**
 * Initializes the game world with canvas and keyboard controls.
 */
    function initWorld() {
        canvas = document.getElementById("canvas");
        world = new World(canvas, keyboard)
        ctx = canvas.getContext('2d')
    }

/**
 * Starts the game by hiding the start screen and loading assets.
 */
    function startGame(){
        document.getElementById('gameSection').classList.remove('gameSection')
        document.getElementById('canvas').classList.remove('dnone')
        document.getElementById('mainButton').classList.add('dnone')
        document.getElementById('footer').classList.add('dnone')
        document.documentElement.style.backgroundImage = "url('gameassets/img/game-background-image.png')";
        preloadAssets()
    }

    window.addEventListener('resize', checkScreenOrientation);
    window.addEventListener('orientationchange', checkScreenOrientation);
    document.addEventListener('DOMContentLoaded', () => {
        checkScreenOrientation();

    });
    
/**
 * Checks the screen orientation and displays a rotation prompt if needed.
 */
    function checkScreenOrientation() {
    const elements = [
        document.getElementById('switchMobileDevice'),
        document.getElementById('uiSwitchMobileDevice')
    ];
    const portrait = window.innerHeight > window.innerWidth;
    elements.forEach(el =>
        el.classList.toggle('dnone', !portrait)
    );
}

/**
 * Checks win or lose conditions and displays the appropriate overlay.
 */
    function winOrLoseOverlay() {
            const endboss = world.enemies.find(enemy => enemy instanceof Endboss);
            if (world.character.live <= 0 && world.character.dead) {
                winOrLosescreen('lose')
                playSound(SOUNDS.character.DEAD)   
            }else if (world.character.live > 0 && endboss.dead) {
                winOrLosescreen('win')
                playSound(SOUNDS.character.WIN)       
            }else  return;
    }

/**
 * Clears all active intervals from the game world, character, and enemies.
 */
    function clearAllIntervals() {
        world.character.intervals.forEach(interval => clearInterval(interval));
        if(world.enemies.length > 0){
        world.enemies.forEach(enemy => {
            enemy.intervals.forEach(interval => clearInterval(interval));
        });}
        world.intervals.forEach(interval => clearInterval(interval));
    }

/**
 * Displays the win or lose screen based on the game result.
 * @param {string} result - The game result ('win' or 'lose').
 */
    function winOrLosescreen(result) {
        clearAllIntervals()
        document.getElementById('mobileBtn').innerHTML = ""
        if(document.fullscreenElement){
            toggleForFullscreen();
            exitFullscreen()
        }
        setTimeout(() => {  
        
        document.getElementById('winOrLose').classList.remove('dnone')
        document.getElementById('winOrLose').innerHTML += winOrLoseImage(result)
        }, 1000);
    }

/**
 * Restarts the game by resetting the level and starting a new game.
 */
    function restartGame() {        
       levelGenerator ;
        level_1 ;
        document.getElementById('winOrLose').classList.add('dnone')
        document.getElementById('winOrLose').innerHTML = "";
        document.getElementById('hudID').innerHTML = ""
        startGame()     
    }

 /**
 * Go Home and set game to zero and visible startscreem
 */
    function goHome() {
        levelGenerator ;
        level_1 ;
        document.getElementById('winOrLose').classList.add('dnone')
        document.getElementById('canvas').classList.add('dnone')
        document.getElementById('footer').classList.remove('dnone')
        document.getElementById('mainButton').classList.remove('dnone')
        document.getElementById('menuButtonLine').classList.add('dnone')
        document.getElementById('burgerBtn').classList.add('dnone')
        document.getElementById('winOrLose').innerHTML = "";
        document.getElementById('hudID').innerHTML = ""
        document.getElementById('mobileBtn').innerHTML = ""
        document.getElementById('gameSection').classList.add('gameSection')
        hiddenDialog();
        document.documentElement.style.backgroundImage = "url('gameassets/img/Heroimage.png')";
        soundmodeON = false
        worldsound(SOUNDS.Worldsounds.BACKGROUNDSOUND);
    }


/**
 * Make sure the menu is hidden.
 */
    function hiddenDialog() {
    const burgerdialog = document.getElementById("burgerDialog");

    if (!burgerdialog.classList.contains('dnone')) {
        burgerdialog.classList.add('dnone');
    }
}
/**
 * Toggles icon and soundmode between on and off.
 */
function toggleSoundmode() {
    soundmodeON = !soundmodeON;

    document.querySelectorAll('.soundImg').forEach(icon => {
        icon.classList.toggle('sound-on', soundmodeON);
        icon.classList.toggle('sound-off', !soundmodeON);
    }); 
     if (world.character.isLongIdle) {
        playSoundloop(world.character.idleSound);
    }
    worldsound(SOUNDS.Worldsounds.BACKGROUNDSOUND);
}

/**
 * Update mobile sound buttons
 */
function sycnIconinTemplate(){
   const burgerSoundmode = document.getElementById('burgerSoundmode')
        if (soundmodeON) 
        burgerSoundmode.classList.add('sound-on')
        else
        burgerSoundmode.classList.add('sound-off')
}

/**
 * Toggles fullscreen mode for the game window.
 */
    function fullscreen() {
    const gameWindow = document.getElementById('gameWindow');
    document.getElementById('mobileBtn').innerHTML = '';
    document.getElementById('hudID').innerHTML = '';

        if (!document.fullscreenElement) {
            setBtn('hudID');  
            toggleForFullscreen();
            enterfullScreen(gameWindow);
            toggleBurgerMenu('burgerOutOfUI');
            mobileControls();
        
        } else {
            document.getElementById('hudID').innerHTML = '';
            toggleForFullscreen();
            toggleBurgerMenu('burgerInUI')
            toggleBurgerMenu('burgerOutOfUI')
            exitFullscreen();
            setBtn('mobileBtn');   
            mobileControls();
        }
    }


/**
 * Help function for fullscreen
 */
    function toggleForFullscreen(){
        document.getElementById('canvas').classList.toggle('gameWindow100')
        document.getElementById('burgerBtnInCanvas').classList.toggle('dnone')
    }

/**
 * Enters fullscreen mode for the specified element.
 * @param {HTMLElement} element - The element to display in fullscreen.
 */
    function enterfullScreen(element){
        if(element.requestFullscreen)
            element.requestFullscreen();
        else if (element.msRequestFullscreen)
            element.msRequestFullscreen();
        else if(element.webkitRequestFullscreen)
            element.webkitRequestFullscreen();
        else exitFullscreen(element);
        document.getElementById('hudID').classList.add('MobileBtnFullscreen')
        document.getElementById('mobileBtn').innerHTML = ""
    }

/**
 * Exits fullscreen mode.
 */
    function exitFullscreen() {
        if (document.exitFullscreen) 
            document.exitFullscreen();
        else if (document.msExitFullscreen) 
            document.msExitFullscreen();
        else if (document.webkitExitFullscreen) 
            document.webkitExitFullscreen();
        document.getElementById('hudID').innerHTML = ""
        setBtn('mobileBtn')
    }        

/**
 * Opens the information dialog.
 */
    function openInfoDialog() {
        const dialog = document.querySelector('dialog');
        dialog.showModal();
    }

/**
 * Closes the information dialog.
 */
    function closeInfoDialog() {
        const dialog = document.querySelector('dialog');
        dialog.close();
    }

/**
 * Toggles the visibility of the burger menu.
 * @param {string} menu - The ID of the menu element to toggle.
 */
    function toggleBurgerMenu(currentDiv) {
        const toggleMenu = document.getElementById(currentDiv)
        if (toggleMenu.innerHTML === "") 
            setBurger(currentDiv)    
        else
            toggleMenu.innerHTML = ""
    }

/**
 * Toggles the visibility of the loading screen.
 */
    function loadingScreen() {
        document.getElementById('loadingScreen').classList.toggle('dnone');
    }

/**
 * Visible Buttons after loading
 */
    function startGameButtons() {
        document.getElementById('burgerBtn').classList.remove('dnone')
        document.getElementById('menuButtonLine').classList.remove('dnone')
    }

/**
 * Visible container in different id
 *  @param {String} hudcontainer - different id Class
 */
    function setBtn(hudcontainer) {
       const btnContainer = document.getElementById(hudcontainer)
       btnContainer.innerHTML = mobileBtn();  
    }


/**
 * Visible container in different id
 *  @param {String} hudcontainer - different id Class
 */
    function setBurger(currentDiv) {
        const burgerContainer = document.getElementById(currentDiv)
        burgerContainer.innerHTML += burgerMenu(currentDiv);
        sycnIconinTemplate();
    }