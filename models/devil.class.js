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
    HURT = MOVABELS.devil.IMAGES_HURT

    SOUND = SOUNDS.devil.DEAD


    constructor(){
        super().loadImage('gameassets/Devil/PNG/PNG Sequences/Idle/0_Zombie_Idle_000.png')
        this.loadImages(this.IDLE);
        this.loadImages(this.WALK);
        this.loadImages(this.DYING);
        this.loadImages(this.HURT);
        this.speed =  0.5 * Math.random()
        this.x = 600 + Math.random() * (3300 - 600);
        this.otherDirection = true;
        this.animateEnemiesRunLeft()
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
        if (!this.dead) 
            this.playAnimationLoop(this.WALK);
    
    
        }, 1000 / 7 );
        const devilLeftInterval = setInterval(() =>{ 
        this.moveLeft();   


        }, 1000 / 60);
        this.intervals.push(devilAnimationInterval);
        this.intervals.push(devilLeftInterval);            
    }

/**
 * play hurt animation
 */       
    playHurt() {
        if (this.dead || this.live <= 0) return;
        this.playAnimationOnce(this.HURT);
    }

/**
 * Stops all intervals and plays the dying animation.
 */
    stopInterval(){
        this.intervals.forEach(clearInterval)

        this.playAnimationOnce(this.DYING);
    }

}   
