class Keyboard {
    
    LEFT = false;
    RIGHT = false;
    UP = false;
    SPACE = false;
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