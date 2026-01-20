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
            gameStarted = true;
            setFooter()
            setMobilebuttons();
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
        document.body.style.backgroundImage = "url('gameassets/img/game-background-image.png')";
        preloadAssets()
        mobileControls();
    }

/**
 * Sets the footer visibility based on screen width.
 */
    function setFooter() {
        if (window.innerWidth > 1200)
        document.getElementById('footerLine').classList.remove('dnone')
    }

    window.addEventListener('resize', checkScreenOrientation);
    window.addEventListener('orientationchange', checkScreenOrientation);
    document.addEventListener('DOMContentLoaded', () => {
        checkScreenOrientation();
        setMobilebuttons();
    });
    
/**
 * Checks the screen orientation and displays a rotation prompt if needed.
 */
    function checkScreenOrientation() {
        const switchScreen = document.getElementById('switchMobileDevice');
        const switchscreenUi = document.getElementById('uiSwitchMobileDevice')
            if (window.innerHeight > window.innerWidth) {
                switchScreen.classList.remove('dnone');
                switchscreenUi.classList.remove('dnone');
            }else {
                switchScreen.classList.add('dnone');
                switchscreenUi.classList.add('dnone');
            }
    }

/**
 * Sets the visibility of mobile control buttons based on screen size and game state.
 */
    function setMobilebuttons() {
        const hud = document.getElementById('hud')
        const burger = document.getElementById('burgerBtn')
        if(window.innerWidth < 1200 && gameStarted == true){
                hud.classList.remove('dnone');
                burger.classList.remove('dnone');
            }else{
                hud.classList.add('dnone');
                burger.classList.add('dnone');
            }
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
        if(document.fullscreenElement)
            exitFullscreen(); 
            setTimeout(() => {  
            document.getElementById('winOrLose').classList.remove('dnone')
            document.getElementById('winOrLose').innerHTML =
                    `<div class="winScreen"> 
                        <img  class="resultImage" src="./gameassets/img/${result}.png" alt="${result} screen">
                        <button class="dialoCloseBtn" onclick="restartGame()"><img src="./gameassets/img/icons/button.png" alt=""></button>
                    </div>`
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
        startGame()     
    }

/**
 * Toggles icon and soundmode between on and off.
 */
    function toggleSoundmode() {
        const icons = [
        document.getElementById('soundIcon'),
        document.getElementById('burgerSoundIcon'),
        document.getElementById('burgerSoundIconUi')];

        if (soundmodeON) {
            soundmodeON = false
            icons.forEach(icon => {
                icon.src = 'gameassets/img/icons/soundmute.png'});
            worldsound(SOUNDS.Worldsounds.BACKGROUNDSOUND)

        } else if (soundmodeON == false) {
             icons.forEach(icon => {
                icon.src = 'gameassets/img/icons/soundOn.png'});
            soundmodeON = true
            worldsound(SOUNDS.Worldsounds.BACKGROUNDSOUND)
        }
    }

/**
 * Toggles fullscreen mode for the game window.
 */
    function fullscreen() {
    const gameWindow = document.getElementById('gameWindow');
    const canvas = document.getElementById('canvas');
    const menu = document.getElementById('ui100');

    if (!document.fullscreenElement) {
        gameWindow.classList.add('gameWindow100');
        canvas.classList.add('gameWindow100');
        menu.classList.remove('dnone');
        enterfullScreen(gameWindow);
    } else {
        gameWindow.classList.remove('gameWindow100');
        canvas.classList.remove('gameWindow100');
        menu.classList.add('dnone');
        exitFullscreen();
    }
    }

/**
 * Enters fullscreen mode for the specified element.
 * @param {HTMLElement} element - The element to display in fullscreen.
 */
    function enterfullScreen(element){
        if(element.requestFullscreen)
            element.requestFullscreen()
        else if (element.msRequestFullscreen)
            element.msRequestFullscreen();
        else if(element.webkitRequestFullscreen)
            element.webkitRequestFullscreen();
        else exitFullscreen(element)
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
    function toggleBurgerMenu(menu) {
        document.getElementById(menu).classList.toggle('dnone')
    }

/**
 * Toggles the visibility of the loading screen.
 */
    function loadingScreen() {
        document.getElementById('loadingScreen').classList.toggle('dnone');
    }
