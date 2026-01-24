class Attack extends MovableObject {
    ATTACK = MOVABELS.character.IMAGES_ATTACK

    currentImage = 0;
    world;
    hitboxOffsetX = 42;
    hitboxOffsetY = 52;
    hitboxWidth = 15;
    hitboxHeight = 15;
    damage = 25;
    hasDealtDamage = false;

    constructor(x, y, otherDirection){
        super().loadImage('gameassets/Elves/PNG/PNG Sequences/attack/Explosion_3.png')
        this.loadImages(this.ATTACK);
        this.trow ()
        this.x = x ;
        this.y = y ;
        this.otherDirection = otherDirection;      
    }

/**
 * Initiates the throwing motion of the attack projectile.
 */
    trow (){   
        this.speedY = 20;
        this.applyGravity();
        this.throwInterval = setInterval(() => {
            if (this.otherDirection) 
                this.x = 0;
            else if (this.y >= 274) {
           this.y = 274;             
           clearInterval(this.throwInterval);
           this.playExplosion();
            }else 
                this.x += 15;
        }, 60);
    }

/**
 * Plays the explosion animation when the attack hits the ground.
 */
    playExplosion() {
        this.currentImage = 0;
        const explosionInterval = setInterval(() => {
            if(this.currentImage < this.ATTACK.length) {
                this.playAnimationOnce(this.ATTACK);
            } else {
                clearInterval(explosionInterval);
            }
        }, 60);
    }

/**
 * Removes the attack object from the game world.
 */
    removeFromWorld() {
        this.x = -1000;
    }
    
/**
 * Checks if the attack is above the ground level.
 * @returns {boolean} True if above ground, false otherwise.
 */
   isAboveGround(){
        return this.y < 274;
    } 
}