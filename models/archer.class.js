class Archer extends MovableObject{
    world;
    currentImage = 0;
    hitboxOffsetX = 27;
    hitboxOffsetY = 25;
    hitboxWidth = 45;
    hitboxHeight = 60;
    damageMultiplier = 1.8;
    y = 260
    live = 100;
    dead = false;
    intervals = [];
    damage = 5;
    resistance = 2

    IDLE = MOVABELS.archer.IMAGES_IDLE
    WALK = MOVABELS.archer.IMAGES_WALK
    DYING = MOVABELS.archer.IMAGES_DYING
    HURT = MOVABELS.archer.IMAGES_HURT
    

    SOUND = SOUNDS.enemies.DEAD


    constructor(){
        super().loadImage('gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_000.png')
        this.loadImages(this.IDLE);
        this.loadImages(this.WALK);
        this.loadImages(this.DYING);
        this.loadImages(this.HURT);
        this.speed = 0.5 + Math.random() * 1;
        this.x = 600 + Math.random() * (3300 - 600);
        this.otherDirection = true;
        this.animateEnemiesRunLeft()
        this.applyGravity();
    }

/**
 * Animates the archer enemy moving left with walking animation.
 */
    animateEnemiesRunLeft() {
        const enemiesAnimationInterval = setInterval(() => {
        if (!this.dead) 
            this.playAnimationLoop(this.WALK);    
    
        }, 1000 / 10 );
        const enemiesLeftInterval = setInterval(() =>{ 
        this.moveLeft();   


        }, 1000 / 60);
        this.intervals.push(enemiesAnimationInterval);
        this.intervals.push(enemiesLeftInterval);            
    }

/**
 * Stops all intervals and plays the dying animation.
 */
    stopInterval(){
        this.intervals.forEach(clearInterval);
        this.playAnimationOnce(this.DYING);
    }

/**
 * play hurt animation
 */
   playHurt() {
        if (this.dead || this.live <= 0) return;
        this.playAnimationOnce(this.HURT);

    }

}
