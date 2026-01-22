class Devil extends MovableObject{
    world;
    height = 180;
    width = 180;
    y = 200
    currentImage = 0;
    hitboxOffsetX = 50;
    hitboxOffsetY = 50;
    hitboxWidth = 80;
    hitboxHeight = 100;
    damageMultiplier = 1.8;
    live = 100;
    dead = false;
    intervals = [];
    damage = 10;
    resistance = 1.5

    IDLE = MOVABELS.devil.IMAGES_IDLE
    WALK = MOVABELS.devil.IMAGES_WALK
    DYING = MOVABELS.devil.IMAGES_DYING

    SOUND = SOUNDS.devil.SCREAM


    constructor(){
        super().loadImage('gameassets/Devil/PNG/PNG Sequences/Idle/0_Zombie_Idle_000.png')
        this.loadImages(this.IDLE);
        this.loadImages(this.WALK);
        this.loadImages(this.DYING);
        this.speed =  0.5 * Math.random()
        this.x = 600 + Math.random() * (Math.random() * (5 - 1) * 2000);
        this.otherDirection = true;
        // this.animateEnemiesRunLeft()
        this.applyGravity();
    }

 /**
 * Checks if the endboss is above the ground level.
 * @returns {boolean} True if above ground, false otherwise.
 */
    isAboveGround(){    
        return this.y < 90;
    }

/**
 * Animates the archer enemy moving left with walking animation.
 */
    animateEnemiesRunLeft() {
        const devilAnimationInterval = setInterval(() => {
            this.playAnimationLoop(this.WALK)    
    
        }, 1000 / 7 );
        const devilLeftInterval = setInterval(() =>{ 
        this.moveLeft();   
        this.playRandomEnemySound();

        }, 1000 / 60);
        this.intervals.push(devilAnimationInterval);
        this.intervals.push(devilLeftInterval);            
    }

/**
 * Stops all intervals and plays the dying animation.
 */
    stopInterval(){
        this.intervals.forEach(clearInterval)
        this.playAnimationOnce(this.DYING, this.currentImage);
    }

/**
 * Randomly plays the enemy and devil sound.
 */
    playRandomEnemySound() {
        let random = Math.floor(Math.random() * 3000) === 0 ? 1 : 0;
        if (random >= 1 && !this.dead){
            playSound(this.SOUND)
        } 
    
    }
}   
