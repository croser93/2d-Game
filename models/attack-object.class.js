class Attack extends MovableObject {


    IMAGE_ATTACK = ['gameassets/Elves/PNG/PNG Sequences/attack/Explosion_1.png',
                    'gameassets/Elves/PNG/PNG Sequences/attack/Explosion_2.png',
                    'gameassets/Elves/PNG/PNG Sequences/attack/Explosion_3.png',
                    'gameassets/Elves/PNG/PNG Sequences/attack/Explosion_4.png',
                    'gameassets/Elves/PNG/PNG Sequences/attack/Explosion_5.png',
                    'gameassets/Elves/PNG/PNG Sequences/attack/Explosion_6.png',
                    'gameassets/Elves/PNG/PNG Sequences/attack/Explosion_7.png',
                    'gameassets/Elves/PNG/PNG Sequences/attack/Explosion_8.png',
                    'gameassets/Elves/PNG/PNG Sequences/attack/Explosion_9.png',
                    'gameassets/Elves/PNG/PNG Sequences/attack/Explosion_10.png',

    ];

    currentImage = 0;
    world;

    hitboxOffsetX = 0;
    hitboxOffsetY = 0;
    hitboxWidth = 0;
    hitboxHeight = 0;

    


    constructor(x, y){
        super().loadImage('gameassets/Elves/PNG/PNG Sequences/attack/Explosion_3.png')
        this.loadImages(this.IMAGE_ATTACK);
        this.trow ()
        this.x = x ;
        this.y = y ;
        
    }

trow (){   
    this.speedY = 20;
    this.applyGravity();
    this.throwInterval = setInterval(() => {
        this.x += 10;
        if(this.y >= 274) {
            clearInterval(this.throwInterval);
            this.playExplosion();
        }
    }, 60);
}

playExplosion() {
    this.currentImage = 0;
    const explosionInterval = setInterval(() => {
        if(this.currentImage < this.IMAGE_ATTACK.length) {
            this.playAnimationOnce(this.IMAGE_ATTACK);
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