class Character extends MovableObject{

    speed = 2;
    currentImage = 0;
    world;
    endOfMap = 3750;
    live = 100;
    mana = 50;
    coin = 20;
    lastHit;
    dead = false
    intervals = [];
    x = 100
    y = 260

    walkSound = SOUNDS.character.WALKING
    hurtSound = SOUNDS.character.HURT
    deadSound = SOUNDS.character.DEAD
    idleSound = SOUNDS.character.LONG_IDLE
    jumpSound = SOUNDS.character.JUMPING

    IDLE = MOVABELS.character.IMAGES_IDLE
    WALK = MOVABELS.character.IMAGES_WALK
    HURT = MOVABELS.character.IMAGES_HURT
    DYING = MOVABELS.character.IMAGES_DYING
    JUMPING = MOVABELS.character.IMAGES_JUMPING
    LONG_IDLE = MOVABELS.character.IMAGES_LONG_IDLE

    hitboxOffsetX = 27;
    hitboxOffsetY = 25;
    hitboxWidth = 45;
    hitboxHeight = 60;

    isLongIdle = false;

    constructor() {
        super().loadImage('gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_000.png')
        this.loadImageChar()
        this.animate();
        this.applyGravity();
        this.startIdleTimer();
    }

/**
 * Loads all character animation images.
 */
    loadImageChar(){
        this.loadImages(this.IDLE);
        this.loadImages(this.WALK);
        this.loadImages(this.HURT);
        this.loadImages(this.DYING);
        this.loadImages(this.JUMPING);
        this.loadImages(this.LONG_IDLE);
    }

/**
 * Initializes character animation and keyboard controls.
 */
    animate() {     
        this.keyboardInterval();
        this.playAnimationKeyboard (); 
    }

/**
 * Handles keyboard input for character movement.
 */
   keyboardInterval() {
        let animateInterval = setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.endOfMap) {
                this.moveRight()
                this.otherDirection = false;
            }  
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft(2)
                this.otherDirection = true;
            }
            if(this.world.keyboard.UP && !this.isAboveGround()){
                this.setSpeedY(15)
            }
            this.world.camera_x = -this.x + 100;
        },1000 / 60);
        this.intervals.push(animateInterval);
    }

/**
 * Manages animation playback based on character state.
 */
    playAnimationKeyboard () {
        let animationInterval = setInterval(() => {
            if (this.isAboveGround()) 
                this.jump(); 
            else if (this.isHurt()){
                this.isHurtDamage()}
            else if((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.isAboveGround)
                this.walk ();
            else if(this.live <= 0)
                this.deadAnimation();  
            else if (this.isLongIdle) 
                this.longIdle(); 
            else
            this.idle(); 
        },     
        1000 / 10);
        this.intervals.push(animationInterval);      
    }

/**
 * Plays the walking animation and sound.
 */
    walk (){
        this.playAnimationLoop(this.WALK);
        playSound(this.walkSound);
        this.resetIdle()
    }

/**
 * Plays the death animation and sound.
 */
    deadAnimation(){
        this.playAnimationOnce(this.DYING);
    }

/**
 * Plays the jumping animation and sound.
 */
    jump(){
      this.playAnimationLoop(this.JUMPING);
        playSound(this.jumpSound);
        this.resetIdle()  
    }

/**
 * Plays the hurt animation and sound.
 */
    isHurtDamage(){
        this.playAnimationLoop(this.HURT);
        playSound(this.hurtSound);
        this.resetIdle()
    }

/**
 * Plays the long idle animation.
 */
    longIdle(){
        this.playAnimationLoop(this.LONG_IDLE);
        
    }

/**
 * Plays the idle animation.
 */
    idle(){
        this.playAnimationLoop(this.IDLE); 
    }

/**
 * Applies damage to the character.
 * @param {number} damage - The amount of damage to apply.
 */
    hit(damage) {
        this.live -= damage;  
        if (this.live <= 0) {
            this.live = 0
            this.dead = true;       
        }else
            this.lastHit = new Date().getTime();
    }

/**
 * Collects an item and increases the specified stat.
 * @param {string} type - The type of stat to increase (coin, mana, live).
 * @param {number} amount - The amount to increase.
 */
    collect(type, amount){
        this[type] += amount;
        if (this[type] > 100) {
            this[type] = 100    
        }    
    }

/**
 * Checks if the character is currently hurt.
 * @returns {boolean} True if hurt, false otherwise.
 */
    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit
        timepassed = timepassed / 1000
        return timepassed < 0.2
    }

/**
 * Starts the idle timer for long idle animation.
*/
    startIdleTimer() {
    this.idleTime = 0;

    let longIdleInterval = setInterval(() => {
        if (this.dead) return;

        this.idleTime += 100;

        if (this.idleTime >= 15000 && !this.isLongIdle) {
            this.isLongIdle = true;
            playSoundloop(this.idleSound);
        }
    }, 100);

    this.intervals.push(longIdleInterval);
}

/**
 * Resets the idle timer and stops long idle animation.
 */
    resetIdle() {
    this.idleTime = 0;
    this.isLongIdle = false;

    const audio = this.idleSound.SOUND;
    audio.pause();
    audio.currentTime = 0;
}

}

