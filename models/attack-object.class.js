class Attack extends MovableObject {
    ATTACK = MOVABELS.character.IMAGES_ATTACK

    currentImage = 0;
    world;

    hitboxOffsetX = 0;
    hitboxOffsetY = 0;
    hitboxWidth = 0;
    hitboxHeight = 0;
    damage = 20;

    constructor(x, y, otherDirection){
        super().loadImage('gameassets/Elves/PNG/PNG Sequences/attack/Explosion_3.png')
        this.loadImages(this.ATTACK);
        this.trow ()
        this.x = x ;
        this.y = y ;
         this.otherDirection = otherDirection;      
    }

trow (){   
    this.speedY = 20;
    this.applyGravity();
    this.throwInterval = setInterval(() => {
        if (this.otherDirection) {
            this.x -= 15;
        } else {
            this.x += 15;
        }
        if(this.y >= 274) {
            clearInterval(this.throwInterval);
            this.playExplosion();
        }
    }, 60);
}

playExplosion() {
    this.currentImage = 0;
    const explosionInterval = setInterval(() => {
        if(this.currentImage < this.ATTACK.length) {
            this.playAnimationOnce(this.ATTACK);
        } else {
            clearInterval(explosionInterval);
            this.removeFromWorld();
        }
    }, 60);
}

removeFromWorld() {
    this.x = -1000;
}

   isAboveGround(){
    return this.y < 274;
}
}